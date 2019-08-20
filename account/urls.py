from django.conf.urls import url
from . import views

urlpatterns=[
     url(r'^$',views.welcome,name = 'welcome'),
     url(r'^api/history/$',views.HistoryList.as_view()),
     url(r'^api/bank/$',views.BankList.as_view()),
     # url("^auth/register/$", RegistrationAPI.as_view())
]