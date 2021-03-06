# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-11-13 18:45
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Settings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='请输入小于50字符的描述！', max_length=50, verbose_name='网站名')),
                ('add_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='添加时间')),
            ],
            options={
                'verbose_name': '网站设置',
                'verbose_name_plural': '网站设置',
            },
        ),
    ]
