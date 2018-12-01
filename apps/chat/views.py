import json

from django.core import serializers

from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination #分页
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_extensions.cache.mixins import CacheResponseMixin
# from rest_framework.throttling import UserRateThrottle, AnonRateThrottle # 限速使用
# from rest_framework.permissions import IsAuthenticated

from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.authentication import SessionAuthentication
from utils.permissions import IsOwnerOrReadOnly

from .models import ChatRoom, ChatUser
from .serializers import ChatRoomSerializer,ChatUserSerializer
from .filters import ChatRoomFilter,ChatUserFilter

class ChatRoom_ListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    # permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    # authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)

    queryset = ChatRoom.objects.order_by('-id')
    serializer_class = ChatRoomSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = ChatRoomFilter
   
# 创建-获取：房间内的人员信息
class ChatUser_ListViewSet(mixins.ListModelMixin,  viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)

    queryset = ChatUser.objects.order_by('-id')
    serializer_class = ChatUserSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = ChatUserFilter

# # 获取当日全部数据-初始化使用
# class Pk10_Open_ListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
#     # pagination_class = GoodsPagination
#     queryset = Pk10_Open.objects.order_by('-id')
#     serializer_class = Pk10_Open_Serializer
#     filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
#     filter_class = Pk10_Open_Filter
    
# # 获取最新一条数据
# class Pk10_Open_New_ListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
#     # throttle_classes = (UserRateThrottle, AnonRateThrottle)
#     queryset = Pk10_Open.objects.order_by('-id')[:1]
#     serializer_class = Pk10_Open_Serializer
#     filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)