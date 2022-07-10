from django.contrib import admin
from django.urls import path, include
import dj_rest_auth

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/authentication/', include('dj_rest_auth.urls')),
    path('', include('register.urls'))
]
'''
admin/
api/authentication/password/reset/ [name='rest_password_reset']
api/authentication/password/reset/confirm/ [name='rest_password_reset_confirm']
api/authentication/login/ [name='rest_login']
api/authentication/logout/ [name='rest_logout']
api/authentication/user/ [name='rest_user_details']
api/authentication/password/change/ [name='rest_password_change']
'''