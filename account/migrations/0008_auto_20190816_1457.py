# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-08-16 14:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_history_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='Contact',
            field=models.IntegerField(max_length=10),
        ),
    ]