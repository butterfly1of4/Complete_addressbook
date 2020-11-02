# Generated by Django 3.1.3 on 2020-11-02 22:48

from django.db import migrations, models
import django.db.models.deletion
import phone_field.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(default='username', max_length=200, unique=True)),
                ('user_email', models.CharField(default='email', max_length=400)),
                ('user_password', models.CharField(default='password', max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact_email', models.CharField(default='contactemail', max_length=300, unique=True)),
                ('contact_first_name', models.CharField(default='first', max_length=200)),
                ('contact_last_name', models.CharField(default='last', max_length=300)),
                ('contact_phone_number', phone_field.models.PhoneField(max_length=31)),
                ('contact_home_address', models.TextField(default='address')),
                ('contact_relation', models.CharField(default='relation', max_length=200)),
                ('contact_group', models.CharField(default='group', max_length=300)),
                ('contact_age', models.IntegerField(default=0)),
                ('contact_notes', models.TextField(default='notes')),
                ('contact_user', models.ForeignKey(default='user', on_delete=django.db.models.deletion.CASCADE, related_name='contacts', to='addressbook.user')),
            ],
        ),
    ]