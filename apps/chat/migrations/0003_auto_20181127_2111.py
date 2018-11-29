# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-11-27 21:11
from __future__ import unicode_literals

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_auto_20181127_2111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatroom',
            name='avatar',
            field=imagekit.models.fields.ProcessedImageField(default='chat/room/avatar/default.png', null=True, upload_to='chat/room/avatar/%Y/%m'),
        ),
    ]
