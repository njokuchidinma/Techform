from django.db import models


class TechForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, null=True)
    number = models.CharField(max_length=200, default="")
    password = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=200, default="")
    program = models.CharField(max_length=100, default="")
    state = models.CharField(max_length=200, default="")
    country = models.CharField(max_length=200, default="")
    message = models.CharField(max_length=500, default="")
    address = models.CharField(max_length=300, null=True, blank=True)


'''class TechForm(models.Model):
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100, null=True)
    password = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=200)
    address = models.CharField(max_length=300)

    def __str__(self):
        return self.username + '' + self.email + '' + self.password + '' + self.location + '' + self.address'''