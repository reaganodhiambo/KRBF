from rest_framework import serializers
from .models import Region, Club, Team, Player


class RegionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Region
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    region = serializers.StringRelatedField()
    manager = serializers.StringRelatedField()
    coach = serializers.StringRelatedField()

    class Meta:
        model = Club
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    club = serializers.StringRelatedField()
    region = serializers.StringRelatedField()
    class Meta:
        model = Team
        fields = "__all__"


class PlayerSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    current_club = serializers.StringRelatedField()
    current_team = serializers.StringRelatedField()

    class Meta:
        model = Player
        fields = "__all__"
