# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-08-16 14:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_auto_20190816_1443'),
    ]

    operations = [
        migrations.AddField(
            model_name='history',
            name='Contact',
            field=models.IntegerField(default=0),
        ),
    ]
