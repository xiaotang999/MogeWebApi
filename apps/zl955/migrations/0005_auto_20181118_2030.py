# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-11-18 20:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zl955', '0004_auto_20181113_1933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guanggaos',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='zl955/abb/', verbose_name='广告图片'),
        ),
    ]