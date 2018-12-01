import xadmin
from .models import ChatRoom, ChatUser



class ChatRoomAdmin(object):
    list_display = ['name', "url", "add_time"]
    ordering = ["-id"]

class ChatUserAdmin(object):
    list_display = ['room', "user", "add_time"]
    ordering = ["-id"]



xadmin.site.register(ChatRoom, ChatRoomAdmin)
xadmin.site.register(ChatUser, ChatUserAdmin)
