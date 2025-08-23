# Django REST Framework views
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import (
    PersonalInfo, Experience, Skill, Project, 
    Education, Language, ValueProposition, Testimonial # Added Testimonial
)
from .serializers import (
    PersonalInfoSerializer, ExperienceSerializer, SkillSerializer,
    ProjectSerializer, EducationSerializer, LanguageSerializer,
    ValuePropositionSerializer, TestimonialSerializer # Added TestimonialSerializer
)

class PersonalInfoView(generics.RetrieveAPIView):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer
    
    def get_object(self):
        return PersonalInfo.objects.first()

class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.filter(featured=True)
    serializer_class = ProjectSerializer

class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class LanguageListView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class ValuePropositionListView(generics.ListAPIView):
    queryset = ValueProposition.objects.all()
    serializer_class = ValuePropositionSerializer

class TestimonialListView(generics.ListAPIView): # New Testimonial View
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

# Optional: Single endpoint to get all resume data
@api_view(['GET'])
def resume_data_view(request):
    personal_info = PersonalInfo.objects.first()
    experiences = Experience.objects.all()
    skills = Skill.objects.all()
    projects = Project.objects.filter(featured=True)
    education = Education.objects.all()
    languages = Language.objects.all()
    value_propositions = ValueProposition.objects.all()
    testimonials = Testimonial.objects.all() # Fetch testimonials
    
    data = {
        'personal_info': PersonalInfoSerializer(personal_info).data if personal_info else None,
        'experiences': ExperienceSerializer(experiences, many=True).data,
        'skills': SkillSerializer(skills, many=True).data,
        'projects': ProjectSerializer(projects, many=True).data,
        'education': EducationSerializer(education, many=True).data,
        'languages': LanguageSerializer(languages, many=True).data,
        'value_propositions': ValuePropositionSerializer(value_propositions, many=True).data,
        'testimonials': TestimonialSerializer(testimonials, many=True).data, # Include testimonials
    }
    
    return Response(data)
