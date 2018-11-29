from django.db import models
from datetime import datetime
from DjangoUeditor.models import UEditorField
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill



class Settings(models.Model):
    """网站设置"""
    name = models.CharField(max_length=50, verbose_name="网站标题", help_text="请输入小于50字符的描述！")
    keywords = models.CharField(max_length=150, verbose_name="SEO-网站关键词", help_text="请输入小于100字符的描述！")
    description =  models.CharField(max_length=150, verbose_name="SEO-网站介绍词", help_text="请输入小于100字符的描述！")
    icons = models.ImageField(upload_to="zl955/settings/", null=True, blank=True, verbose_name="favicon图标")
    logo_pic = models.ImageField(upload_to="zl955/settings/", null=True, blank=True, verbose_name="网站标题图片")
    water_pic = models.ImageField(upload_to="zl955/settings/", null=True, blank=True, verbose_name="水印背景图片")
    m_desc = UEditorField(verbose_name="中间显示信息",width=900, height=150, imagePath="zl955/settings/middle/", filePath="ueditor/", default='')
    b_desc = UEditorField(verbose_name="底部显示信息",width=900, height=350, imagePath="zl955/settings/bottom/", filePath="ueditor/", default='')
    explain = models.CharField(max_length=150, verbose_name="网站声明", help_text="请输入小于100字符的描述！")
    update_time = models.DateTimeField(default=datetime.now, verbose_name="更新时间")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")

    class Meta:
        verbose_name = "网站设置"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

class Guanggaos(models.Model):
    """广告设置"""
    name = models.CharField(max_length=150, verbose_name="广告名字", help_text="请输入小于100字符的描述！")
    image = models.ImageField(upload_to="zl955/abb/", null=True, blank=True, verbose_name="广告图片")
    # image = ProcessedImageField(upload_to='zl955/abb/', format='JPEG', options={'quality': 60}, null=True, blank=True, verbose_name="广告图片")
    href = models.CharField(max_length=250, verbose_name="广告链接", help_text="请输入小于200字符的描述！")
    is_show = models.BooleanField(choices=((True,'显示'),(False,'不显示')),max_length=2,verbose_name='是否显示', default=True)
    update_time = models.DateTimeField(default=datetime.now, verbose_name="更新时间")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间")
    
    class Meta:
        verbose_name = "广告设置"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name