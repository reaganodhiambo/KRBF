from django.db import models
from accounts.models import User
import uuid

# Create your models here.
"""contains the models for the clubs app models like clubs,teams, players, etc."""


class Region(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    code = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Club(models.Model):
    name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    registration_number = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True
    )
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    # Club details
    founded_year = models.PositiveIntegerField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    contact_number = models.CharField(max_length=20, null=True, blank=True)
    contact_email = models.EmailField(null=True, blank=True)
    logo = models.ImageField(upload_to="images/clubs/logos/", null=True, blank=True)

    # club officials
    manager = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="club_manager"
    )
    coach = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="club_coach"
    )

    # Club status
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Team(models.Model):
    CATEGORIES = [
        ("men_senior", "Men Senior"),
        ("women_senior", "Women Senior"),
        ("men_junior", "Men Junior"),
        ("women_junior", "Women Junior"),
    ]

    name = models.CharField(max_length=200)
    club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="teams")
    category = models.CharField(max_length=20, choices=CATEGORIES)

    is_active = models.BooleanField(default=True)
    created_at =models.DateTimeField( auto_now_add=True)

    def __str__(self):
        return self.name


class Player(models.Model):
    POSITIONS = [
        ("far_right", "Far Right"),
        ("far_left", "Far Left"),
        ("center", "Center"),
        ("second_right", "Second Right"),
        ("second_left", "Second Left"),
    ]

    # Personal Info
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    jersey_number = models.PositiveIntegerField()
    position = models.CharField(max_length=20, choices=POSITIONS)

    # Current Registration
    current_club = models.ForeignKey(
        Club, on_delete=models.CASCADE, related_name="players"
    )
    current_team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="players"
    )

    # Player Details
    height = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True
    )  # in cm
    weight = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True
    )  # in kg
    dominant_hand = models.CharField(
        max_length=10, choices=[("left", "Left"), ("right", "Right")], blank=True
    )

    # Registration Info
    registration_date = models.DateTimeField(auto_now_add=True)
    registration_number = models.CharField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        unique_together = [["current_team", "jersey_number"]]

    def __str__(self):
        return self.user.first_name 
    
