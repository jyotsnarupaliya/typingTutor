# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User

from .models import lesson
import json

# Create your views here.
def index(request):
	lessons = lesson.objects.all()
	count = len(lessons)
	tutorials = []

	for i in lessons:
		# ids.append(i.id)
		tutorial = {}
		tutorial["name"] = i.name
		tutorial["id"] = i.id
		tutorials.append(tutorial)

	context = {"lessons": tutorials}

	template = loader.get_template('lessons/index.html')
	return HttpResponse(template.render(context, request))

def home(request):
	lessons = lesson.objects.all()
	count = len(lessons)
	ids = []

	for i in lessons:
		ids.append(i.id)
	context = {"ids": ids}

	template = loader.get_template('lessons/home.html')
	return HttpResponse(template.render(context, request))

def getLesson(request, lid):
	print ("anything")
	if request.method == 'GET':
		t = lesson.objects.get(id = lid)

		chapter = {
		"name": t.name,
		"text": t.text
		}

		chap = json.dumps(chapter)
		text = "khhkashkha"

	# return HttpResponse("yess")

	return HttpResponse(chap, content_type = 'text')

def getText(request, lid):
	print ("reached function", lid)
	data = lesson.objects.get(name = lid)
	if request.method == "GET":
		print ("reached function 1")
		# print ("lesons is", t.name)
		context = {
			'lid': lid,
			'name': data.name,
			'text': data.text
		}

		print (context)

		# return HttpResponse(json.dumps(context))
	template = loader.get_template('lessons/home.html')
	return HttpResponse(template.render(context, request))
