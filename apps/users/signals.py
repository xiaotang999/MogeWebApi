from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model

User = get_user_model()

# django信号量实现用户密码修改
# post_save:接收信号的方式
# sender: 接收信号的model
# 如果新建超级用户 需要先屏蔽下列
@receiver(post_save, sender=User)
def create_user(sender, instance=None, created=False, **kwargs):
    # 是否新建，因为update的时候也会进行post_save
    if created:
        password = instance.password
        if len(password) > 20:# 大于这个已经是加密过的通过createsuperuser创建的 不再加密了
                instance.password
        else:
                instance.set_password(password)
        instance.save()
