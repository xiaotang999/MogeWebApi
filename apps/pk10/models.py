from django.db import models
from datetime import datetime

# Create your models here.
class Pk10_Open(models.Model):
    """PK10-开奖号"""
    day_id = models.CharField(max_length=50, unique=True, verbose_name="当日期号")
    issue = models.CharField(max_length=50, unique=True, verbose_name="期号")
    opens = models.CharField(max_length=50, verbose_name="开奖号", help_text="如需修改,请用逗号,间隔！")
    gyh = models.CharField(max_length=50, verbose_name="冠亚和", help_text="如需修改,请用逗号,间隔！")
    lh = models.CharField(max_length=50, verbose_name="1-5龙虎", help_text="如需修改,请用逗号,间隔！")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")


    class Meta:
        verbose_name = "PK10-开奖号"
        verbose_name_plural = verbose_name

    def __str__(self):
        return "第 {} 期".format(self.issue)

# class WebSet(models.Model):
#     """PK10-开奖号"""
#     day_id = models.CharField(max_length=50, unique=True, verbose_name="当日期号")
#     issue = models.CharField(max_length=50, unique=True, verbose_name="期号")
#     opens = models.CharField(max_length=50, verbose_name="开奖号", help_text="如需修改,请用逗号,间隔！")
#     gyh = models.CharField(max_length=50, verbose_name="冠亚和", help_text="如需修改,请用逗号,间隔！")
#     lh = models.CharField(max_length=50, verbose_name="1-5龙虎", help_text="如需修改,请用逗号,间隔！")
#     add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")


#     class Meta:
#         verbose_name = "PK10-开奖号"
#         verbose_name_plural = verbose_name

#     def __str__(self):
#         return "第 {} 期".format(self.issue)