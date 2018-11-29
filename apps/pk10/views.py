import json

from django.core import serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination #分页
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_extensions.cache.mixins import CacheResponseMixin
# from rest_framework.throttling import UserRateThrottle, AnonRateThrottle # 限速使用
# from rest_framework.permissions import IsAuthenticated

from .models import Pk10_Open
from .serializers import Pk10_Open_Serializer
from .filters import Pk10_Open_Filter



# 页面设置
# class GoodsPagination(PageNumberPagination):
#     page_size = 10
#     page_size_query_param = 'page_size'
#     page_query_param = "page"
#     max_page_size = 100

# 获取当日全部数据-初始化使用
class Pk10_Open_ListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    # pagination_class = GoodsPagination
    queryset = Pk10_Open.objects.order_by('-id')
    serializer_class = Pk10_Open_Serializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = Pk10_Open_Filter
    
# 获取最新一条数据
class Pk10_Open_New_ListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    # throttle_classes = (UserRateThrottle, AnonRateThrottle)
    queryset = Pk10_Open.objects.order_by('-id')[:1]
    serializer_class = Pk10_Open_Serializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)

# 提交采集到的数据
class Pk10_Req(APIView):
    def get(self, request, *args, **kwargs):
        """
        状态: 222:成功, 333:没有传参或其他问题, 444:key不对, 554:首次入库失败, 555:二次入库失败
        """
        try:
            check_key = '*@%4JksclK@mrstP'
            # 获取get的数据
            _key = request.GET.get("key")
            _day_id = request.GET.get("day_id")
            _issue = request.GET.get("issue")
            _opens = request.GET.get("opens")
            if check_key == _key:# 判断是否为空
                # 计算 冠亚和 "09,01,10,08,03,06,07,04,05,02"
                arr_opens = _opens.split(',') # 字符串转换list
                arr_opens =[int(i) for i in arr_opens] # list内的字符串遍历程int
                guang = arr_opens[0]+arr_opens[1]
                ya = '大' if guang >= 12 else '小'
                he = '双' if (guang % 2) == 0 else '单'
                _gyh = str(guang)+','+ya+','+he
                # 计算 龙虎 1V10龙虎	2V9龙虎	3V8龙虎	4V7龙虎	5V6龙虎
                lh_1 = '龙' if arr_opens[0] > arr_opens[9] else '虎'
                lh_2 = '龙' if arr_opens[1] > arr_opens[8] else '虎'
                lh_3 = '龙' if arr_opens[2] > arr_opens[7] else '虎'
                lh_4 = '龙' if arr_opens[3] > arr_opens[6] else '虎'
                lh_5 = '龙' if arr_opens[4] > arr_opens[5] else '虎'
                _lh = lh_1+','+lh_2+','+lh_3+','+lh_4+','+lh_5
                # 获取数据库数据
                old_expect = Pk10_Open.objects.order_by('-id')[:1]
                info = json.loads(serializers.serialize("json", old_expect))
                if info == []:
                    try:
                        up = Pk10_Open()
                        up.day_id = _day_id
                        up.issue = _issue
                        up.opens = _opens
                        up.gyh = _gyh
                        up.lh = _lh
                        up.save()
                        print('数据库没数据直接写入数据库-成功')
                        Response.status_code = 222
                    except:
                        print('数据库没数据直接写入数据库-失败')
                        Response.status_code = 554
                else:
                    old_day_id = info[0]['fields']['day_id']
                    old_issue = info[0]['fields']['issue']
                    if _day_id != old_day_id and old_issue!= _issue:
                        try:
                            up = Pk10_Open()
                            up.day_id = _day_id
                            up.issue = _issue
                            up.opens = _opens
                            up.gyh = _gyh
                            up.lh = _lh
                            up.save()
                            print('[今日期号]和[期号]不相等，写入数据库-成功')
                            Response.status_code = 222
                        except:
                            print('[今日期号]和[期号]不相等，写入数据库-失败')
                            Response.status_code = 555
            else:
                Response.status_code = 444
        except:
            Response.status_code = 333
        # 始终返回hello world
        return Response('hello world')
