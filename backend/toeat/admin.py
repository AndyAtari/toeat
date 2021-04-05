from django.contrib import admin
from .models import Toeat

class ToeatAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Toeat, ToeatAdmin)
