from django.views.decorators.csrf import csrf_protect
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import RegisterSerializer
from .models import User
from .forms import UserForm

@authentication_classes([])
@permission_classes([])
class RegisterAPIView(APIView):
    serializer_class = RegisterSerializer
    
    def get(self,request):
        Users = User.objects.all()
        UsersSerializer = self.serializer_class(Users, many=True)
        return Response(UsersSerializer.data)
    
    def put(self,request,*args, **kwargs):
        UserSerializer = self.serializer_class(data=request.data)
        if UserSerializer.is_valid():
            UserSerializer.save()
            return Response({
                'message': 'Usuario registrado correctamente.'
            }, status=HTTP_201_CREATED)
        return Response({
            'message': 'Hay errores en el registro',
            'errors': UserSerializer.errors
        }, status=HTTP_400_BAD_REQUEST)
        