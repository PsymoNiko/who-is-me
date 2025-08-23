# Django URLs configuration
from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.Health, name='index'),
    path('personal-info/', views.PersonalInfoView.as_view(), name='personal-info'),
    path('experiences/', views.ExperienceListView.as_view(), name='experiences'),
    path('skills/', views.SkillListView.as_view(), name='skills'),
    path('projects/', views.ProjectListView.as_view(), name='projects'),
    path('education/', views.EducationListView.as_view(), name='education'),
    path('languages/', views.LanguageListView.as_view(), name='languages'),
    path('value-propositions/', views.ValuePropositionListView.as_view(), name='value-propositions'),
    path('testimonials/', views.TestimonialListView.as_view(), name='testimonials'), # New URL

    # Optional: Single endpoint for all data
    path('resume/', views.resume_data_view, name='resume-data'),
]
