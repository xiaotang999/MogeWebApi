# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-11-19 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pk10', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pk10_open',
            name='day_id',
            field=models.CharField(max_length=50, unique=True, verbose_name='当日期号'),
        ),
        migrations.AlterField(
            model_name='pk10_open',
            name='issue',
            field=models.CharField(max_length=50, unique=True, verbose_name='期号'),
        ),
    ]
