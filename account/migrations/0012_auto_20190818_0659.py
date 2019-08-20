# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-08-18 06:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0011_auto_20190818_0653'),
    ]

    operations = [
        migrations.CreateModel(
            name='BanksMerch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bank_name', models.CharField(max_length=70)),
            ],
        ),
        migrations.AddField(
            model_name='historymerch',
            name='access',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='account.Accesses'),
        ),
        migrations.AddField(
            model_name='historymerch',
            name='bank',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='account.Banks'),
        ),
        migrations.AddField(
            model_name='historymerch',
            name='transaction',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='account.Types'),
        ),
    ]
