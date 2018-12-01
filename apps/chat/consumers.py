# chat/consumers.py
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
import json
from .models import ChatRoom, ChatUser
from django.contrib.auth import get_user_model
User = get_user_model()
class ChatConsumer(AsyncWebsocketConsumer):


    # 进入房间
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        isinroom = await self.write_name() # 已经加入房间了---需要写个数据库 异步写入

        if isinroom: # 不在房间···
            await self.channel_layer.group_add( # 加入该房间
                self.room_group_name,
                self.channel_name
            )
            message = self.scope['user']
            await self.channel_layer.group_send( # 加入后发送一个消息
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': message
                }
            )
            await self.accept()
    # 
    @database_sync_to_async
    def write_name(self): # 先查询 房间号是否存在，在查询用户是否在该房间
        try: 
            room = ChatRoom.objects.filter(url = self.room_name) # 房间号是否存在
            if room:
                who = User.objects.filter(id=self.scope['user']['id']) # 查询会员信息
                inRooms = ChatUser.objects.filter(user=who,room=room) # 查询是否在房间内
                print(inRooms)
                if not inRooms: # 不存在-保存数据-执行进房操作
                    try:
                        p = ChatUser(user=who[0],room=room[0])
                        p.save()
                        print('添加了该数据')
                        return True
                    except expression as identifier:
                        pass
        except expression as e:
            pass
        








    # 离开房间
    async def disconnect(self, close_code): 
        # Leave room group
        delroom = await self.del_name() # 删除数据库的数据！

        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        # 封装退出消息 发送给下个方法
        message = {
            'type':'out',
            'id':self.scope['user']['id']
        }
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    @database_sync_to_async
    def del_name(self): # 先查询 房间号是否存在，在查询用户是否在该房间
        try: 
            # print( self.scope )
            del_room = ChatRoom.objects.filter(url = self.scope['url_route']['kwargs']['room_name']) # 房间号是否存在
            del_who = User.objects.filter(id=self.scope['user']['id']) # 查询会员信息
            del_inRooms = ChatUser.objects.filter(user=del_who,room=del_room) # 查询是否在房间内
            # print( self.scope['url_route']['kwargs']['room_name'] )
            if del_inRooms: # 存在-删除数据
                try:
                    # print(del_room[0])
                    p = ChatUser.objects.get(user=del_who[0],room=del_room[0])
                    p.delete()
                    print('删除了该数据')
                    return True
                except expression as identifier:
                    pass
        except expression as e:
            pass


    # 接受客户端消息  # 后期得做带token的 不然会有问题
    async def receive(self, text_data): 
        print(text_data)
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        message['type'] = 'other'
        # 封装消息 发送给下个方法
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )
    # 从房间接收消息 -  上面的方法封装
    async def chat_message(self, event): 
        message = event['message']
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))


# from channels.db import database_sync_to_async

# async def connect(self):
#     self.username = await self.get_name()

# @database_sync_to_async
# def get_name(self):
#     return User.objects.all()[0].name