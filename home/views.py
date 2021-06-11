from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import Tech

def forms(request):

    form = Tech()
    if request.method == 'POST':
        techform = Tech(request.POST)
        if techform.is_valid():
            techform.save()
            messages.success(request, 'Congratulations! Form has been submitted')
            return redirect(request.path)
    context = {'form': form}
    return render(request, 'home/form.html', context)


'''from django.shortcuts import render
from .forms import TechForm

def tech(request):
    form = TechForm()
    context = {'form': form}

    if request.method == 'POST':
        form = TechForm(request.POST)
        if form.is_valid():

            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            location = form.cleaned_data['location']
            profession = form.cleaned_data['profession']
            print(username, email, password, location, profession)

    return render(request, 'home/Signn.html', context)
'''
