import django_filters
from .models import Pk10_Open


class Pk10_Open_Filter(django_filters.rest_framework.FilterSet):
    # name = django_filters.CharFilter(field_name='issue')
   
    now_day_id = django_filters.NumberFilter(field_name='day_id', lookup_expr='gte') # 获取当天数据的过滤器

    class Meta:
        model = Pk10_Open
        fields = ['id', 'now_day_id', 'issue', 'add_time']