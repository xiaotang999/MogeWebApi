from django.db import close_old_connections
from django.contrib.auth import get_user_model
import jwt
from rest_framework_jwt.settings import api_settings



User = get_user_model()
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER
jwt_get_username_from_payload = api_settings.JWT_PAYLOAD_GET_USERNAME_HANDLER



class QueryAuthMiddleware:
    def __init__(self, inner):
        print('ws : 初始化成功～')
        self.inner = inner

    def __call__(self, scope):
        print('客户端发起链接...')
        if scope["query_string"]:
            print('token有值')
            token = str(scope["query_string"], encoding = "utf8")
            token = token.split('=')[1]
            print(token)
            payload = None
            try:
                payload = jwt_decode_handler(token)
                # 验证成功了  {'user_id': 2, 'username': 'xxxx', 'exp': 1543822059, 'email': ''}
                _id = payload.get('user_id')
     
                nick_name = User.objects.get(id=_id).nick_name
                avatar = str(User.objects.get(id=_id).avatar)
                # user_id = User.objects.get(id=_id).id
                user = {
                    'type':'join',
                    'nickname':nick_name,
                    'avatar':avatar,
                    'id':str(_id)
                }
                close_old_connections()
                return self.inner(dict(scope, user=user))
            except jwt.ExpiredSignature:
                print('token过期了！')
                return
            except jwt.DecodeError:
                print('其他错误！')
                return
        else:
            return