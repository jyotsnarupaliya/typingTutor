from django.db import models

class lesson(models.Model):
	name = models.CharField(max_length = 100)
	text = models.TextField()

	
	def __str__(self):
		return self.name

class person(models.Model):
	pName = models.CharField(max_length = 100)

