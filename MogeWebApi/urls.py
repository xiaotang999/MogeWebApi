import xadmin
from django.conf.urls import url, include
from django.views.static import serve
from MogeWebApi.settings import MEDIA_ROOT
# from moge.settings import STATIC_ROOT
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from rest_framework_jwt.views import obtain_jwt_token

# from zl955.views import SettingsListViewSet, GuanggaosListViewSet
from pk10.views import Pk10_Open_ListViewSet, Pk10_Req, Pk10_Open_New_ListViewSet
from users.views import UserViewset
from chat.views import ChatRoom_ListViewSet, ChatUser_ListViewSet


router = DefaultRouter()
# 配置api.路由
# router.register(r'api/settings', SettingsListViewSet)
# router.register(r'api/abb', GuanggaosListViewSet)
router.register(r'api/pk10/open', Pk10_Open_ListViewSet, base_name="pk10_open")
router.register(r'api/pk10/news', Pk10_Open_New_ListViewSet, base_name="pk10_news")

router.register(r'api/users', UserViewset, base_name="register")

router.register(r'api/room', ChatRoom_ListViewSet, base_name="room")
router.register(r'api/roomusers', ChatUser_ListViewSet, base_name="roomusers")


from django.views.generic import TemplateView

urlpatterns = [
    url(r'^xadmin/', xadmin.site.urls),
    url(r'^ueditor/', include('DjangoUeditor.urls')), # 富文本路径
    url(r'^media/(?P<path>.*)$', serve, {"document_root": MEDIA_ROOT}), # 静态上传文件路径
    # url(r'^static/(?P<path>.*)$', serve, {"document_root": STATIC_ROOT}),
    # api文档
    url(r'docs/', include_docs_urls(title="网站api")),
    # api调试登录入口
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),  
    #drf自带的token认证模式
    url(r'^api-token-auth/', views.obtain_auth_token),
    # drf的token缺点
    # 保存在数据库中，如果是一个分布式的系统，就非常麻烦
    # token永久有效，没有过期时间。
    url(r'^jwt-auth/', obtain_jwt_token),
    url(r'^api/login/', obtain_jwt_token),

    
    url(r'^api/pk10/req', Pk10_Req.as_view(),name='pk10_req'),

    url(r'^index/', TemplateView.as_view(template_name="index.html"), name="index"),

    url(r'^', include(router.urls)),
]
