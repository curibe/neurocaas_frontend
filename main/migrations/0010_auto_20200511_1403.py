# Generated by Django 2.2.3 on 2020-05-11 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20200414_0741'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='analysis',
            name='config_path',
        ),
        migrations.RemoveField(
            model_name='analysis',
            name='dataset_path',
        ),
        migrations.RemoveField(
            model_name='analysis',
            name='result_items',
        ),
        migrations.RemoveField(
            model_name='analysis',
            name='result_path',
        ),
        migrations.RemoveField(
            model_name='analysis',
            name='submit_path',
        ),
        migrations.RemoveField(
            model_name='analysis',
            name='upload_folder',
        ),
    ]
