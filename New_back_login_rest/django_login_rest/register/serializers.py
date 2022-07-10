from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self,validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    '''def validate_username(self, value):
        users = User.objects.all()
        if value['username'] in users:
            raise serializers.ValidationError("Este usuario ya esta en uso")
        return value'''