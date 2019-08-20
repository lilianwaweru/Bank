# from rest_framework import viewsets, permissions, generics
# from rest_framework.response import Response
 
# from .models import Note
# from .serializers import NoteSerializer, CreateUserSerializer, UserSerializer


# class RegistrationAPI(generics.GenericAPIView):
#     serializer_class = CreateUserSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         return Response({
#             "user": UserSerializer(user, context=self.get_serializer_context()).data,
#             "token": AuthToken.objects.create(user)
#         })
