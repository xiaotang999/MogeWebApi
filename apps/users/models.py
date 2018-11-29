from datetime import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser

from imagekit.models import ProcessedImageField
# Create your models here.

class UserGroup(models.Model):
    """会员组别-发言数等"""
    name = models.CharField(max_length=250, verbose_name="会员组名", help_text="请输入小于200字符的描述！")
    limit_speak_no = models.IntegerField(verbose_name="限制字数", null=True, blank=True, default=100)
    open_speak = models.BooleanField(choices=((True,u'激活'),(False,u'未激活')),max_length=2,verbose_name=u'是否激活', help_text='激活后使用发言等功能', default=False)
    add_time = models.DateTimeField(default=datetime.now, verbose_name="更新时间")

    class Meta:
        verbose_name = "会员组别"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

# 获取默认值 - 先建库后才能操作
# def get_group_default():
#     # print(UserGroup.objects.filter(id=1))
#     # (UserGroup.objects.filter(id=1))
#     asd = UserGroup.objects.get(id=1)
#     print( str(asd) )
#     print( type(asd) )


#     if len(UserGroup.objects.filter(id=1)) == 0:
#         print('初始化生成默认会员组 - 进行中')
#         mk_group = UserGroup()
#         mk_group.name = '默认会员组'
#         mk_group.save()
#         print('初始化生成默认会员组 - 成功')
#         return UserGroup.objects.get(id=1)
#     else:
#         print('执行到这里了')
#         return UserGroup.objects.get(id=1)



class UserProfile(AbstractUser):
    """
    用户
    """
    group = models.ForeignKey(UserGroup, null=True, blank=True, verbose_name="会员组", default=1)
    nick_name = models.CharField(max_length=30, null=True, blank=True, verbose_name="昵称")
    gender = models.CharField(max_length=6, choices=(("male", u"男"), ("female", "女")), default="female", verbose_name="性别")
    mobile = models.CharField(null=True, blank=True, max_length=11, verbose_name="电话")
    avatar = ProcessedImageField(upload_to='users/avatar/%Y/%m',
                                        default="users/avatar/default.png",
                                        null=True,
                                        blank=True, 
                                        format='JPEG',
                                        options={'quality': 80})


    class Meta:
        verbose_name = "用户"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username
        


# class VerifyCode(models.Model):
#     """
#     短信验证码
#     """
#     code = models.CharField(max_length=10, verbose_name="验证码")
#     mobile = models.CharField(max_length=11, verbose_name="电话")
#     add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

#     class Meta:
#         verbose_name = "短信验证码"
#         verbose_name_plural = verbose_name

#     def __str__(self):
#         return self.code



