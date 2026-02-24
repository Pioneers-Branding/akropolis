export interface Department {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const departments: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art cardiac procedures',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Heart'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Comprehensive brain and nervous system treatments',
    image: 'https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Brain'
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    description: 'Kidney care and advanced dialysis services',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Droplets'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Expert bone, joint, and muscle care',
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Bone'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Specialized healthcare for children and infants',
    image: 'https://images.pexels.com/photos/6942019/pexels-photo-6942019.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Baby'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    description: 'Advanced cancer treatment and care',
    image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Shield'
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    description: 'Complete women\'s health and maternity care',
    image: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Heart'
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    description: 'Reconstructive and cosmetic surgery excellence',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Scissors'
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Ear, nose, and throat care',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Ear'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    description: 'Comprehensive eye care and vision services',
    image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Eye'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Skin, hair, and nail care',
    image: 'https://images.pexels.com/photos/3738346/pexels-photo-3738346.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Sparkles'
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Digestive system and endoscopy care',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Activity'
  },
  {
    id: 'health-nutrition',
    name: 'Health & Nutrition',
    description: 'Nutritional counseling and wellness programs',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Apple'
  },
  {
    id: 'emergency',
    name: 'Emergency',
    description: '24/7 emergency and trauma care',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: 'Ambulance'
  }
];