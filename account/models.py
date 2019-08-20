from django.db import models
# from django.contrib.auth.models import User

# Create your models here.

class Accesses(models.Model):
    transaction_access = models.CharField(max_length = 70)

    def __str__(self):
        return self.transaction_access 




class Types(models.Model):
    transaction_type = models.CharField(max_length = 70)

    def __str__(self):
        return self.transaction_type 



class Banks(models.Model):
    bank_name = models.CharField(max_length = 70)

    def __str__(self):
        return self.bank_name 


    
class History(models.Model):
    name = models.CharField(max_length = 70)
    contact = models.IntegerField(max_length = 10)
    description = models.TextField(max_length=300,default=0)
    amount = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
    bank = models.ForeignKey(Banks,on_delete=models.CASCADE,null=True)
    access = models.ForeignKey(Accesses,on_delete=models.CASCADE,null=True)
    transaction = models.ForeignKey(Types,on_delete=models.CASCADE,null=True)

    def save_History(self):
        self.save()

    def __str__(self):
        return self.name 



