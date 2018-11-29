# mysite/routing.py
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing

from chat.middles import QueryAuthMiddleware
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.permissions import IsAuthenticated
# from utils.permissions import IsOwnerOrReadOnly

# print('QueryAuthMiddleware')


application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': QueryAuthMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
        # URLRouter([
        #     path("chat/", MyConsumer),
        # ])

    ),
})

# from django.urls import path
