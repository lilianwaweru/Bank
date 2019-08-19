from rest_framework import serializers
from .models import *


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('name','contact','description','amount','date','bank','access','transaction')

class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banks
        fields = ('bank_name',)
       