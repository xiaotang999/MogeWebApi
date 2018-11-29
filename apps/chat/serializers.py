from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import ChatRoom,ChatUser

User = get_user_model()

class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = "__all__"

class ChatUserSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source='room.url')
    _id = serializers.CharField(source='user.id')
    avatar = serializers.CharField(source='user.avatar')
    nickname = serializers.CharField(source='user.nick_name')
    
    class Meta:
        model = ChatUser
        fields = ('key', '_id', 'avatar', 'nickname')