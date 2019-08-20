from django.contrib import admin
from .models import Accesses,Types,Banks,History

# Register your models here.
admin.site.register(History)
admin.site.register(Banks)
admin.site.register(Types)
admin.site.register(Accesses)
