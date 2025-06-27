from django.shortcuts import render
from rest_framework import viewsets
from .models import Region, Club, Team, Player
from .serializers import (
    RegionSerializer,
    ClubSerializer,
    TeamSerializer,
    PlayerSerializer,
)

# Create your views here.


class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
