from django.conf.urls import url

from . import views

urlpatterns = [
	url('index', views.index, name='index'),
	url('home', views.home, name='home'),
	# url('getText', views.getText, name='getText'),
	url('getText/(?P<lid>\D+\d?)$', views.getText, name='getText'),
]