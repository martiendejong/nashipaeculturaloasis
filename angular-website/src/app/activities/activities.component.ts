import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselFaderComponent } from '../carousel-fader/carousel-fader.component';

interface Activity {
  anchor: string;
  title: string[];
  text: string[];
  image: string;
  sliderImage: string;
  backgroundImage: string;
  duration?: string;
  participants?: string;
  price?: string;
  category?: string;
  shortDescription?: string;
  teaser: string[];
}

@Component({
    selector: 'app-activities',
    standalone: true,
  imports: [CommonModule, CarouselFaderComponent],
    templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  content: Activity[] = [];
  expandedActivities: { [key: string]: boolean } = {};
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Cultural', 'Nature', 'Adventure', 'Relaxation'];
  filteredActivities: Activity[] = [];
  featuredActivities: Activity[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Load activities data
    this.loadActivities();
  }

  private loadActivities() {
    this.content = [
      {
        anchor: 'maasai-village',
        title: ['Maasai Village Tour'],
        text: [
          'Experience the authentic Maasai culture through village tours and traditional activities.',
          'Immerse yourself in the rich cultural heritage of the Maasai people. Visit a traditional village, learn about their customs, and witness their way of life. Experience traditional dances, crafts, and storytelling.'
        ],
        image: 'assets/maasai.jpeg',
        sliderImage: 'assets/olalaimutia village.jpg',
        backgroundImage: 'assets/background.jpg',
        duration: '3 hours',
        participants: '2-10 people',
        category: 'Cultural',
        shortDescription: 'Experience the authentic Maasai culture through village tours and traditional activities.',
        teaser: [
          'Experience the rich culture and exciting adventures at Nashipae Cultural Oasis',
          'Discover traditional crafts and authentic experiences'
        ]
      },
      {
        anchor: 'traditional-dance',
        title: ['Traditional Dance Workshop'],
        text: [
          'Learn traditional Maasai dance moves from expert performers.',
          'Learn the art of traditional Maasai dance from expert performers. This interactive workshop includes basic steps, cultural significance, and a chance to perform with the group.'
        ],
        image: 'assets/beadworking.jpg',
        sliderImage: 'assets/beadmaking.jpeg',
        backgroundImage: 'assets/background2.jpeg',
        duration: '2 hours',
        participants: '4-15 people',
        category: 'Cultural',
        shortDescription: 'Learn traditional Maasai dance moves from expert performers.',
        teaser: [
          'Discover traditional crafts and authentic experiences',
          'Learn the art of traditional Maasai dance'
        ]
      },
      {
        anchor: 'cultural-workshops',
        title: ['Cultural Workshops'],
        text: [
          'Hands-on workshops in traditional crafts and cooking.',
          'Participate in various cultural workshops including beadwork, traditional cooking, and storytelling. Perfect for families and groups interested in hands-on cultural experiences.'
        ],
        image: 'assets/beadmaking.jpeg',
        sliderImage: 'assets/beadworking.jpg',
        backgroundImage: 'assets/background.jpeg',
        duration: '4 hours',
        participants: '2-8 people',
        category: 'Cultural',
        shortDescription: 'Hands-on workshops in traditional crafts and cooking.',
        teaser: [
          'Immerse yourself in the beauty of nature and wildlife',
          'Experience authentic cultural workshops'
        ]
      },
      {
        anchor: 'safari-tours',
        title: ['Safari Tours'],
        text: [
          'Experience the thrill of wildlife spotting in their natural habitat.',
          'Embark on an exciting safari adventure through the surrounding wilderness. Spot wildlife, learn about local ecosystems, and capture stunning photographs of the landscape.'
        ],
        image: 'assets/safari.jpeg',
        sliderImage: 'assets/safari2.jpeg',
        backgroundImage: 'assets/safari3.jpeg',
        duration: '6 hours',
        participants: '2-6 people',
        category: 'Adventure',
        shortDescription: 'Experience the thrill of wildlife spotting in their natural habitat.',
        teaser: [
          'Discover the wild side of Africa',
          'Experience an unforgettable safari adventure'
        ]
      },
      {
        anchor: 'hiking-adventures',
        title: ['Hiking Adventures'],
        text: [
          'Guided hiking tours through beautiful natural landscapes.',
          'Explore scenic trails with experienced guides. Choose from various difficulty levels and discover hidden gems of the landscape.'
        ],
        image: 'assets/hikingsafari1.webp',
        sliderImage: 'assets/hikingsafari2.jpg',
        backgroundImage: 'assets/expiriencewildlife.jpg',
        duration: '4 hours',
        participants: '2-8 people',
        category: 'Adventure',
        shortDescription: 'Guided hiking tours through beautiful natural landscapes.',
        teaser: [
          'Explore the natural beauty of our surroundings',
          'Discover hidden trails and scenic views'
        ]
      },
      {
        anchor: 'wildlife-photography',
        title: ['Wildlife Photography'],
        text: [
          'Learn wildlife photography techniques from professionals.',
          'Perfect your photography skills with expert guidance. Learn techniques for capturing wildlife and landscapes in their natural beauty.'
        ],
        image: 'assets/safari4.jpeg',
        sliderImage: 'assets/safari5.jpeg',
        backgroundImage: 'assets/safari6.jpeg',
        duration: '5 hours',
        participants: '2-4 people',
        category: 'Adventure',
        shortDescription: 'Learn wildlife photography techniques from professionals.',
        teaser: [
          'Capture the beauty of wildlife',
          'Learn professional photography techniques'
        ]
      },
      {
        anchor: 'traditional-spa',
        title: ['Traditional Spa'],
        text: [
          'Relax with traditional healing and spa treatments.',
          'Experience traditional healing and relaxation techniques using local herbs and methods.'
        ],
        image: 'assets/veranda.jpeg',
        sliderImage: 'assets/veranda2.jpeg',
        backgroundImage: 'assets/veranda3.jpeg',
        duration: '2 hours',
        participants: '1-2 people',
        category: 'Relaxation',
        shortDescription: 'Relax with traditional healing and spa treatments.',
        teaser: [
          'Rejuvenate your body and soul',
          'Experience traditional healing methods'
        ]
      },
      {
        anchor: 'yoga-sessions',
        title: ['Yoga Sessions'],
        text: [
          'Morning yoga sessions with scenic views.',
          'Start your day with yoga sessions overlooking the beautiful landscape.'
        ],
        image: 'assets/veranda4.jpeg',
        sliderImage: 'assets/housesunset1.jpeg',
        backgroundImage: 'assets/housesunset2.jpeg',
        duration: '1 hour',
        participants: '4-12 people',
        category: 'Relaxation',
        shortDescription: 'Morning yoga sessions with scenic views.',
        teaser: [
          'Find your inner peace',
          'Start your day with yoga in nature'
        ]
      },
      {
        anchor: 'nature-walks',
        title: ['Nature Walks'],
        text: [
          'Guided nature walks through beautiful landscapes.',
          'Explore the natural beauty of our surroundings with experienced guides. Learn about local flora and fauna.'
        ],
        image: 'assets/safari7.jpeg',
        sliderImage: 'assets/safari8.jpeg',
        backgroundImage: 'assets/safari9.jpeg',
        duration: '3 hours',
        participants: '2-10 people',
        category: 'Nature',
        shortDescription: 'Guided nature walks through beautiful landscapes.',
        teaser: [
          'Connect with nature',
          'Discover the beauty of our natural surroundings'
        ]
      },
      {
        anchor: 'bird-watching',
        title: ['Bird Watching'],
        text: [
          'Observe and learn about local bird species.',
          'Join our expert guides for a bird watching experience. Learn about local bird species and their habitats.'
        ],
        image: 'assets/safari10.jpeg',
        sliderImage: 'assets/safari11.jpeg',
        backgroundImage: 'assets/safari12.jpeg',
        duration: '2 hours',
        participants: '2-6 people',
        category: 'Nature',
        shortDescription: 'Observe and learn about local bird species.',
        teaser: [
          'Discover local bird species',
          'Learn about our feathered friends'
        ]
      }
    ];
    
    // Set up filtered activities
    this.filteredActivities = [...this.content];
    
    // Set up featured activities (first 3)
    this.featuredActivities = this.content.slice(0, 3);
  }

  filterActivities(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredActivities = [...this.content];
    } else {
      this.filteredActivities = this.content.filter(activity => 
        activity.category === category
      );
    }
  }

  toggleActivity(activityId: string) {
    this.expandedActivities[activityId] = !this.expandedActivities[activityId];
  }

  scrollToActivity(activityId: string) {
    const element = document.getElementById(activityId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Expand the activity when scrolling to it
      this.expandedActivities[activityId] = true;
    }
  }

  navigateToBooking(activity: Activity) {
    // Navigate to booking page with activity details
    this.router.navigate(['/booking'], {
      queryParams: {
        activity: activity.anchor,
        title: activity.title[0]
      }
    });
    }
}
