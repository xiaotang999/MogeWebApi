import xadmin

from .models import Pk10_Open

class Pk10_Open_Admin(object):
    """广告设置"""
    list_display = ["day_id", "issue", "opens", "gyh", "lh", "add_time"]
    ordering = ["-id"]
    model_icon = 'fa fa-html5'

xadmin.site.register(Pk10_Open, Pk10_Open_Admin)


