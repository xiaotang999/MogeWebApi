import xadmin

from xadmin import views
from xadmin.views import ListAdminView
from .models import Settings, Guanggaos

class GlobalSetting(object):
    """后台全局设置"""
    site_title = "网站管理"
    site_footer = "网站管理"
    menu_style = 'accordion'

xadmin.site.register(views.CommAdminView, GlobalSetting)

class SettingsAdmin(object):
    """网站设置"""
    list_display = ["name", "add_time"]
    ordering = ["name"]
    style_fields = {"m_desc": "ueditor", "b_desc": "ueditor"}
    model_icon = 'fa fa-html5'
class GuanggaosAdmin(object):
    """广告设置"""
    list_display = ["name", "add_time"]
    ordering = ["name"]
    model_icon = 'fa fa-html5'

xadmin.site.register(Settings, SettingsAdmin)
xadmin.site.register(Guanggaos, GuanggaosAdmin)

