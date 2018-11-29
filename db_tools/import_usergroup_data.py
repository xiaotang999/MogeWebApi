import sys
import os

pwd = os.path.dirname(os.path.realpath(__file__))
pwd = pwd+'/'
sys.path.append(pwd+"../")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "MogeWebApi.settings")


print(pwd)

import django
django.setup()

from users.models import UserGroup

# def create_group():
if len(UserGroup.objects.filter(id=1)) == 0:
    print('执行了')
    mk_group = UserGroup()
    mk_group.name = '默认会员组'
    mk_group.save()
print('done')
