from django.db import models
from django.contrib.auth import get_user_model
import time

from datetime import datetime
from imagekit.models import ProcessedImageField

User = get_user_model()


def randomURL():
    """ 随机地址 """
    key = int(time.time())
    return key

class ChatRoom(models.Model):
    """
    聊天室: 房间名字,在线人数,地址,时间
    """
    name = models.CharField(max_length=20, verbose_name='聊天室名', help_text="请输入小于15字符的描述！")
    # online = models.CharField(max_length=100, verbose_name='在线人数', default="0")
    url =  models.CharField(max_length=20, verbose_name='聊天地址',  default=randomURL)
    avatar = ProcessedImageField(upload_to='chat/room/avatar/%Y/%m',
                                        default="chat/room/avatar/default.png",
                                        null=True,
                                        blank=True, 
                                        format='JPEG',
                                        options={'quality': 80})
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Meta:
        verbose_name = "聊天室"
        verbose_name_plural = verbose_name
        unique_together = ("url",)

    def __str__(self):
        return self.name

class ChatUser(models.Model):
    """
    在线会员: 房间id,房间名称,会员id，会员名,时间
    """
    room = models.ForeignKey(ChatRoom, verbose_name="房间名")
    user = models.ForeignKey(User, verbose_name="用户名")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Meta:
        verbose_name = " 在线会员"
        verbose_name_plural = verbose_name
        # unique_together = ("user",)

    def __str__(self):
        return self.user.username

# class ChatMsg(models.Model):
#     """
#     聊天信息: 房间名,会员名,信息内容,时间
#     """
#     room = models.ForeignKey(ChatRoom, verbose_name="房间名")
#     user = models.ForeignKey(User, verbose_name="用户名")
#     msgs = models.TextField(default="", verbose_name='聊天消息')
#     add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

#     class Meta:
#         verbose_name = "聊天信息"
#         verbose_name_plural = verbose_name

#     def __str__(self):
#         return self.user.username