from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('name','contact','description','amount','date','bank','access','transaction')

class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banks
        fields = ('bank_name',)
       

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')               