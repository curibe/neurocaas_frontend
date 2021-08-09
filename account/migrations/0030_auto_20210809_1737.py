# Generated by Django 2.2.1 on 2021-08-09 17:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0029_auto_20210809_1733'),
    ]

    operations = [
        migrations.AlterField(
            model_name='anagroup',
            name='code',
            field=models.CharField(default='C23151', max_length=6),
        ),
        migrations.AlterField(
            model_name='user',
            name='time_added',
            field=models.TimeField(blank=True, default=datetime.time(0, 0)),
        ),
    ]
