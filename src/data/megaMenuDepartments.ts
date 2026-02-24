export interface MegaMenuDepartment {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

export const megaMenuDepartments: MegaMenuDepartment[] = [
  {
    id: 'orthopaedics',
    name: 'Orthopaedics',
    description: 'Bone, joint and muscle care',
    icon: 'Bone',
    href: '/orthopedics'
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    description: 'Reconstructive and cosmetic surgery',
    icon: 'Scissors',
    href: '/plastic-surgery'
  },
  {
    id: 'gynaecology',
    name: 'Obstetrics & Gynecology',
    description: 'Women\'s health and maternity care',
    icon: 'Heart',
    href: '/obstetrics-gynecology'
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Heart and cardiovascular care',
    icon: 'HeartPulse',
    href: '/cardiology'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Brain and nervous system care',
    icon: 'Brain',
    href: '/neurology'
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    description: 'Kidney care and dialysis services',
    icon: 'Droplets',
    href: '/nephrology'
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Digestive system disorders',
    icon: 'Pill',
    href: '/gastroenterology'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Newborn and children\'s care',
    icon: 'Baby',
    href: '/pediatrics'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Skin, hair and nail care',
    icon: 'Sparkles',
    href: '/dermatology'
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Ear, nose and throat care',
    icon: 'Ear',
    href: '/ent'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    description: 'Eye care and vision treatment',
    icon: 'Eye',
    href: '/ophthalmology'
  },
  {
    id: 'health-nutrition',
    name: 'Health & Nutrition',
    description: 'Nutritional counseling and wellness programs',
    icon: 'Heart',
    href: '/health-nutrition'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    description: 'Cancer treatment and care',
    icon: 'Shield',
    href: '/oncology'
  }
];