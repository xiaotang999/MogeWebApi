import django_filters
from .models import ChatRoom,ChatUser
from django.db.models import Q


# 用url去查找
class ChatRoomFilter(django_filters.rest_framework.FilterSet):
    # name = django_filters.CharFilter(field_name='name')
    class Meta:
        model = ChatRoom
        fields = ['url']

# 用房间号去查找
class ChatUserFilter(django_filters.rest_framework.FilterSet):
    key = django_filters.NumberFilter(field_name='room', lookup_expr='url')
    class Meta:
        model = ChatUser
        fields = ['key']
