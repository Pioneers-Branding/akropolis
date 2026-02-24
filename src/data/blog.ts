export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'Health Tips' | 'News' | 'Medical Updates';
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'heart-health-tips',
    title: '10 Essential Tips for Heart Health',
    excerpt: 'Learn simple lifestyle changes that can significantly improve your cardiovascular health.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Health Tips',
    date: 'January 15, 2025',
    readTime: '5 min read'
  },
  {
    id: 'new-mri-machine',
    title: 'Akropolis Introduces Latest 3T MRI Technology',
    excerpt: 'Our new state-of-the-art MRI machine provides faster, more accurate diagnoses.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'News',
    date: 'January 10, 2025',
    readTime: '3 min read'
  },
  {
    id: 'diabetes-management',
    title: 'Understanding Type 2 Diabetes Management',
    excerpt: 'Comprehensive guide to managing diabetes through diet, exercise, and medication.',
    image: 'https://images.pexels.com/photos/6823557/pexels-photo-6823557.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Medical Updates',
    date: 'January 8, 2025',
    readTime: '7 min read'
  },
  {
    id: 'vaccination-drive',
    title: 'Free Vaccination Drive for Children',
    excerpt: 'Join our community vaccination program to protect your children against preventable diseases.',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'News',
    date: 'January 5, 2025',
    readTime: '4 min read'
  }
];