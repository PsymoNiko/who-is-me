# Django REST Framework serializers
from rest_framework import serializers
from .models import (
    PersonalInfo, Experience, Skill, Project, 
    Education, Language, ValueProposition, Testimonial # Added Testimonial
)

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ['id', 'name', 'title', 'description', 'email', 'github_url', 'linkedin_url']

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'title', 'company', 'start_date', 'end_date', 'is_current', 'achievements']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'years_experience', 'proficiency_level', 'category']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'url', 'github_url', 'tags', 'featured']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'degree', 'institution', 'field_of_study', 'start_year', 'end_year']

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'proficiency']

class ValuePropositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValueProposition
        fields = ['id', 'role_type', 'title', 'description']

class TestimonialSerializer(serializers.ModelSerializer): # New Testimonial Serializer
    class Meta:
        model = Testimonial
        fields = ['id', 'quote', 'author_name', 'author_title', 'author_company', 'date']
