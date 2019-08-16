from django.db import models

# Create your models here.
class History(models.Model):
    Name = models.CharField(max_length = 20)
    description = models.TextField(max_length=300,default=0)
    Amount = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)


    def save_History(self):
        self.save()

    def __str__(self):
        return self.History    
