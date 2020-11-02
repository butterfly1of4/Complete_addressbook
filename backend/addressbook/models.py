from django.db import models
from phone_field import PhoneField

class User(models.Model):
    user_name = models.CharField(max_length=200, default="username", unique=True)
    user_email = models.CharField(max_length=400, default="email")
    user_password = models.CharField(max_length=300, default="password")


    def __str__(self):
        return self.user_name


# # NEW MODEL
class Contact(models.Model):
    # contact_user=models.ManyToManyField(User)
    contact_user = models.ForeignKey(User, on_delete=models.CASCADE, default='user', related_name="contacts")
    contact_email = models.CharField(max_length=300, default='contactemail', unique=True)
    contact_first_name = models.CharField(max_length=200, default="first")
    contact_last_name = models.CharField(max_length=300, default="last")
    contact_phone_number = PhoneField()
    contact_home_address = models.TextField(default="address")
    contact_relation = models.CharField(max_length = 200, default="relation")
    contact_group = models.CharField(max_length=300, default="group")
    contact_age = models.IntegerField(default=int())
    contact_notes= models.TextField(default="notes")


    def __str__(self):
        return self.contact_email
    
    
    # def get_absolute_url(self):
        # return(reverse('contact_info', kwargs={'pk': self.pk}))
    
    
    