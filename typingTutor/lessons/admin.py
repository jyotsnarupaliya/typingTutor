# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import lesson, person

# Register your models here.
admin.site.register(lesson)
admin.site.register(person)