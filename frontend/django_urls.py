# Django URLs configuration
from django.urls import path
from . import views

urlpatterns = [
    path('api/personal-info/', views.PersonalInfoView.as_view(), name='personal-info'),
    path('api/experiences/', views.ExperienceListView.as_view(), name='experiences'),
    path('api/skills/', views.SkillListView.as_view(), name='skills'),
    path('api/projects/', views.ProjectListView.as_view(), name='projects'),
    path('api/education/', views.EducationListView.as_view(), name='education'),
    path('api/languages/', views.LanguageListView.as_view(), name='languages'),
    path('api/value-propositions/', views.ValuePropositionListView.as_view(), name='value-propositions'),
    path('api/testimonials/', views.TestimonialListView.as_view(), name='testimonials'), # New URL
    
    # Optional: Single endpoint for all data
    path('api/resume/', views.resume_data_view, name='resume-data'),
]
