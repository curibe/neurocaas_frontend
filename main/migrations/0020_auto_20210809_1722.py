# Generated by Django 2.2.1 on 2021-08-09 17:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_auto_20201023_0356'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analysis',
            name='config_template',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.ConfigTemplate'),
        ),
    ]