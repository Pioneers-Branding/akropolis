export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  testimonial: string;
  rating: number;
  videoThumbnail: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    patientName: 'Parvana',
    condition: 'Patient Recovery',
    testimonial: 'Every patient\'s recovery is our greatest reward. Parvana shares her heartfelt journey of healing at Akropolis Super Speciality Hospital, where expert care and compassion made all the difference.',
    rating: 5,
    videoThumbnail: 'https://img.youtube.com/vi/27YYyNBTmqE/maxresdefault.jpg',
    date: 'January 2025'
  },
  {
    id: 'testimonial-2',
    patientName: 'Mr. Attar Singh',
    condition: 'Medical Treatment',
    testimonial: 'Every story of healing inspires us! Mr. Attar Singh shares his heartfelt experience at Akropolis Super Speciality Hospital, where care and compassion come together with advanced medical expertise.',
    rating: 5,
    videoThumbnail: 'https://img.youtube.com/vi/VZCHBjHabgA/maxresdefault.jpg',
    date: 'January 2025'
  },
  {
    id: 'testimonial-3',
    patientName: 'Sunil',
    condition: 'Medical Care',
    testimonial: 'A healing journey filled with care and compassion. Sunil shares his experience at Akropolis Super Speciality Hospital, where expert doctors and advanced facilities supported him every step of the way.',
    rating: 5,
    videoThumbnail: 'https://img.youtube.com/vi/J8hHjdXNZK4/maxresdefault.jpg',
    date: 'January 2025'
  },
  {
    id: 'testimonial-4',
    patientName: 'Mr. Uppendra',
    condition: 'Patient Recovery',
    testimonial: 'A healing journey built on trust and care. Uppendra shares his experience at Akropolis Super Speciality Hospital, where expert doctors, advanced facilities, and compassionate support made his recovery smoother and stronger.',
    rating: 5,
    videoThumbnail: 'https://img.youtube.com/vi/2ptCdyAoazY/maxresdefault.jpg',
    date: 'January 2025'
  }
];