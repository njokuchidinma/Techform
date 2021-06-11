from django import forms
from .models import TechForm

class Tech(forms.ModelForm):
    class Meta:
        model = TechForm
        fields = '__all__'


'''from django.forms import ModelForm
from .models import TechForm

class Tech(ModelForm):
    class Meta:
        model = TechForm
        fields = '__all__', '''
