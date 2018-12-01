import xadmin

from xadmin import views
from xadmin.plugins.auth import UserAdmin
from xadmin.layout import Fieldset, Main, Side, Row
from django.utils.translation import ugettext as _
from xadmin.views import ListAdminView

from .models import UserGroup, UserProfile
from xadmin.views import ListAdminView


class GlobalSetting(object):
    """后台全局设置"""
    site_title = "网站管理"
    site_footer = "网站管理"
    menu_style = 'accordion'

xadmin.site.register(views.CommAdminView, GlobalSetting)

class UserProfileAdmin(UserAdmin):
    list_display = ('nick_name', 'username', 'group')
    list_filter = ('username', 'group',)
    # search_fields = ('username', 'mobile', 'first_name', 'last_name', )
    list_editable = ['nick_name', 'group',]
    ordering = ('-id','username')  #打死不要加上add_time
    model_icon = 'fa fa-users'

xadmin.site.unregister(UserProfile)
xadmin.site.register(UserProfile, UserProfileAdmin)

class UserGroupAdmin(object):
    """会员组别"""
    list_display = ["name", "limit_speak_no", "open_speak","add_time"]
    ordering = ["id"]

xadmin.site.register(UserGroup, UserGroupAdmin)
