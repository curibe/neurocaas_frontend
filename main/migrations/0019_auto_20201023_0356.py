# Generated by Django 2.2.1 on 2020-10-23 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0018_auto_20201023_0349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='configtemplate',
            name='config_name',
            field=models.CharField(default='default', help_text='Name of Process', max_length=100, unique=True),
        ),
    ]