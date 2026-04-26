from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project

# ✅ GET all projects
@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all().values()
    return Response(list(projects))


# ✅ ADD project (with image)
@api_view(['POST'])
def add_project(request):
    data = request.data

    project = Project.objects.create(
        title=data.get('title'),
        description=data.get('description'),
        github_link=data.get('github_link', ''),
        live_link=data.get('live_link', ''),
        image=request.FILES.get('image')  # 🔥 important
    )

    return Response({"message": "Project added"})


# ✅ DELETE project
@api_view(['DELETE'])
def delete_project(request, id):
    project = Project.objects.get(id=id)
    project.delete()
    return Response({"message": "Deleted"})


# ✅ UPDATE project
@api_view(['PUT'])
def update_project(request, id):
    project = Project.objects.get(id=id)
    data = request.data

    project.title = data.get('title')
    project.description = data.get('description')
    project.github_link = data.get('github_link', '')
    project.live_link = data.get('live_link', '')

    if request.FILES.get('image'):
        project.image = request.FILES.get('image')

    project.save()

    return Response({"message": "Updated"})