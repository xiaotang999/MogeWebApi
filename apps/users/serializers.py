import re
from rest_framework import serializers
from django.contrib.auth import get_user_model
from datetime import datetime
from datetime import timedelta
from rest_framework.validators import UniqueValidator

# from .models import VerifyCode

from MogeWebApi.settings import REGEX_MOBILE

User = get_user_model()


# class SmsSerializer(serializers.Serializer):
#     mobile = serializers.CharField(max_length=11)

#     def validate_mobile(self, mobile):
#         """
#         验证手机号码
#         :param data:
#         :return:
#         """
#         print('returnreturnreturnreturnreturn')
#         # 手机是否注册
#         if User.objects.filter(mobile=mobile).count():
#             print('用户已经存在')
#             raise serializers.ValidationError("用户已经存在")

#         # 验证手机号码是否合法
#         if not re.match(REGEX_MOBILE, mobile):
#             print('手机号码非法')
#             raise serializers.ValidationError("手机号码非法")

#         # 验证码发送频率
#         # one_mintes_ago = datetime.now() - timedelta(hours=0, minutes=1, seconds=0)
#         # if VerifyCode.objects.filter(add_time__gt=one_mintes_ago, mobile=mobile).count():
#         #     raise serializers.ValidationError("距离上一次发送未超过60s")

#         return mobile


class UserDetailSerializer(serializers.ModelSerializer):
    """
    用户详情序列化类
    """
    class Meta:
        model = User
        fields = ("id", "nick_name", "avatar")

class UserRegSerializer(serializers.ModelSerializer):

    username = serializers.CharField(label="用户名", help_text="用户名", required=True, allow_blank=False,
                                     validators=[UniqueValidator(queryset=User.objects.all(), message="用户已经存在")])

    nick_name = serializers.CharField(label="昵称", help_text="昵称", required=True, allow_blank=False,
                                     validators=[UniqueValidator(queryset=User.objects.all(), message="昵称已经存在")])

    password = serializers.CharField(
        style={'input_type': 'password'},help_text="密码", label="密码", write_only=True,
    )
    # write_only 只写入 不返回值  不然容易被截获

    mobile = serializers.CharField(max_length=11)

    def validate_nick_name(self, nick_name):
        """
        验证昵称
        """
        print(nick_name)
        print(len(nick_name))
        if len(nick_name) > 10 or len(nick_name) <= 1:
            print('昵称长度错误')
            raise serializers.ValidationError("昵称长度错误")

        return nick_name

    def validate_password(self, password):
        """
        验证码密码
        """
        if len(password) > 16 or len(password) < 6:
            print('密码长度错误')
            raise serializers.ValidationError("密码长度错误")

        return password

    def validate_mobile(self, mobile):
        """
        验证手机号码
        :param data:
        :return:
        """
        # 手机是否注册
        if User.objects.filter(mobile=mobile).count():
            print('用户已经存在')
            raise serializers.ValidationError("用户已经存在")

        # 验证手机号码是否合法
        if not re.match(REGEX_MOBILE, mobile):
            print('手机号码非法')
            raise serializers.ValidationError("手机号码非法")

        return mobile

    def validate(self, attrs):
        print(attrs)
        attrs["mobile"] = attrs["username"]
        # del attrs["code"]
        return attrs

    class Meta:
        model = User
        fields = ("username", "nick_name", "mobile", "password")
