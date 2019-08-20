from django.shortcuts import render
from .models import History 
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializer import *



# Create your views here.
def welcome(request):
    return render(request,'welcome.html')



class HistoryList(APIView):
    def get(self, request, format=None):
        all_merch = History.objects.all()
        serializers = HistorySerializer(all_merch, many=True)

        return Response(serializers.data) 

class BankList(APIView):
    def get(self, request, format=None):
        all_merch = Banks.objects.all()
        serializers = BankSerializer(all_merch, many=True)

        return Response(serializers.data) 

         