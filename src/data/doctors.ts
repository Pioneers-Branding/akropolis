export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  opdTiming: string;
  image: string;
  department: string;
  description?: string;
  services?: string[];
  registrationVerified?: boolean;
  yearsAsSpecialist?: string;
  education?: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  positions?: Array<{
    title: string;
    organization: string;
    period: string;
  }>;
  publications?: string[];
  memberships?: string[];
  email?: string;
  phone?: string;
}

export const doctors: Doctor[] = [
  {
    id: 'dr-anu-nagpal',
    name: 'Dr. Anu Nagpal',
    specialization: 'Obstetrician & Gynecologist',
    qualification: 'MBBS, MS - Obstetrics & Gynaecology',
    experience: '11+ years',
    yearsAsSpecialist: '7 years as specialist',
    opdTiming: 'Mon-Sat: 9:00 AM - 5:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/DR. ANU-NAGPAL.png',
    department: 'Obstetrics & Gynaecology',
    registrationVerified: true,
    description: 'Dr. Anu Nagpal is a highly experienced Obstetrician and Gynecologist in Badshahpur, Gurgaon with 11 years of comprehensive experience in women\'s health care. She specializes in prenatal care, high-risk pregnancies, gynecological surgeries, and comprehensive women\'s health management. Dr. Nagpal practices at Akropolis Super Speciality Hospital where she provides compassionate, patient-centered care with a focus on evidence-based medicine and the latest advances in obstetrics and gynecology.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Dr. B. R. Ambedkar University',
        year: '2013'
      },
      {
        degree: 'MS - Obstetrics & Gynaecology',
        institution: 'MMU Mullana',
        year: '2016'
      }
    ],
    services: [
      'Comprehensive Gynecological Care',
      'Obstetric Care & Prenatal Management',
      'High-Risk Pregnancy Management',
      'Normal & Cesarean Deliveries',
      'Infertility Consultation & Treatment',
      'Menstrual Disorders Management',
      'Menopause Management',
      'Family Planning & Contraception',
      'Gynecological Surgeries',
      'Preventive Women\'s Health Screenings',
      'Adolescent Gynecology',
      'Pregnancy Care & Monitoring'
    ],
    positions: [
      {
        title: 'Consultant Obstetrician & Gynecologist',
        organization: 'Akropolis Super Speciality Hospital, Badshahpur, Gurgaon',
        period: 'Present'
      }
    ]
  },
  {
    id: 'dr-prateek-girotra',
    name: 'Dr. Prateek Girotra',
    specialization: 'Director & Head, Department of Orthopedics',
    qualification: 'MBBS, MS (Orthopaedics)',
    experience: '12+ years',
    yearsAsSpecialist: '10+ years as specialist',
    opdTiming: 'Mon-Sat: 8:00 AM - 2:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/DR. PRATEEK-GIROTRA.png',
    department: 'Orthopedics',
    registrationVerified: true,
    description: 'Dr. Prateek Girotra is a highly skilled Orthopaedic Surgeon specializing in Trauma, Joint Replacement, and Arthroscopy. With over a decade of experience in reputed hospitals across Delhi NCR, he is renowned for handling complex skeletal trauma, advanced arthroscopic surgeries, and hip & knee replacements with precision and compassion. He completed his postgraduation from Hindu Rao Hospital & NDMC Medical College, Delhi. He has specialized training in Spine & Plastic Surgery from Safdarjung Hospital, Delhi, and expertise in Paediatric Orthopaedics including deformity correction, Ilizarov & JESS techniques. Currently serving as Director & HOD of Orthopaedics at Akropolis Superspeciality Hospital, he is also a Visiting Consultant at Nagpal Nursing Home and Tulsi Healthcare in Gurgaon.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Medical College',
        year: '2012'
      },
      {
        degree: 'MS - Orthopaedics',
        institution: 'Hindu Rao Hospital & NDMC Medical College, Delhi',
        year: '2019'
      },
      {
        degree: 'Specialized Training - Spine & Plastic Surgery',
        institution: 'Safdarjung Hospital, Delhi',
        year: '2020'
      },
      {
        degree: 'Specialized Training - Paediatric Orthopaedics',
        institution: 'Deformity Correction, Ilizarov & JESS Techniques',
        year: '2021'
      }
    ],
    services: [
      'Complex Skeletal Trauma Management',
      'Hip & Knee Joint Replacement Surgery',
      'Advanced Arthroscopic Surgeries',
      'ACL Reconstruction (Transportal Single Bundle)',
      'Rotator Cuff Repair (Arthroscopic Assisted Mini-Open)',
      'Proximal Tibia Fracture Management (Locking Compression Plate)',
      'Intra-articular Distal Radius Fracture Fixation',
      'Malleolar Fracture Fixation',
      'Clubfoot Management (Ponseti Method)',
      'Paediatric Orthopaedics & Deformity Correction',
      'Spine Surgery',
      'Ilizarov & JESS Techniques',
      'Sports Injury Treatment',
      'Trauma Surgery'
    ],
    positions: [
      {
        title: 'Director & HOD, Orthopaedics',
        organization: 'Akropolis Superspeciality Hospital',
        period: 'Present'
      },
      {
        title: 'Visiting Consultant',
        organization: 'Nagpal Nursing Home, Sector-14 Gurgaon',
        period: 'Present'
      },
      {
        title: 'Visiting Consultant',
        organization: 'Tulsi Healthcare, Sector-65 Gurgaon',
        period: 'Present'
      },
      {
        title: 'Director & HOD, Orthopaedics',
        organization: 'Rajmanjri Group of Multispeciality Hospital, Sohna',
        period: '2021-2022'
      },
      {
        title: 'Senior Resident, Orthopaedics',
        organization: 'Hindu Rao Hospital, Delhi & BPS Medical College, Sonipat',
        period: '2019-2021'
      },
      {
        title: 'Medical Officer',
        organization: 'District Sonipat, Haryana',
        period: '2013-2016'
      },
      {
        title: 'Resident, General Surgery',
        organization: 'BPS Medical College, Sonipat',
        period: '2012-2013'
      }
    ],
    publications: [
      'Functional outcome of locking compression plate in the management of proximal tibia fracture - Int J Orthop Sci, 2020; 6(1):152-156',
      'Arthroscopic repair of rotator cuff tears: analysis and functional outcome - Int J Res Orthop, 2020',
      'Demographic profile and functional outcome following fixation of malleolar fractures in adults - Int J Res Orthop, March 2020',
      'Comparative study of operative management of intra-articular distal radius fractures - IJMRP, September 2019',
      'Evaluation of Ponseti Method in clubfoot management',
      'ACL reconstruction outcomes: semitendinosus vs gracilis grafts - Int J Orthop Sci, 2020',
      'Arthroscopic assisted mini-open rotator cuff repair: Quality of Life study',
      'Transportal single bundle ACL reconstruction using quadruple hamstring graft - Int J Orthop Sci, 2022'
    ],
    memberships: [
      'Delhi Orthopaedic Association',
      'Gurgaon Orthopaedic Society',
      'Indian Arthroscopy & Arthroplasty Society (IAOS)',
      'Paediatric Orthopaedic Foundation (Life Member)',
      'Indian Medical Association (IMA)'
    ],
    email: 'drgirotraprateek@gmail.com',
    phone: '+91-9540746690'
  },
  {
    id: 'dr-rahul-jain',
    name: 'Dr. Rahul Jain',
    specialization: 'Consultant Plastic & Reconstructive Surgeon',
    qualification: 'MBBS, MS - General Surgery, MCh - Plastic Surgery',
    experience: '12+ years',
    yearsAsSpecialist: '2 years as specialist',
    opdTiming: 'Mon-Fri: 10:00 AM - 4:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/DR. RAHUL-JAIN.png',
    department: 'Plastic Surgery',
    registrationVerified: true,
    description: 'Dr. Rahul Jain is a dedicated Plastic and Reconstructive Surgeon with over 12 years of experience, including 2 years of specialization in plastic surgery. He combines surgical precision with an artistic approach to deliver outstanding outcomes in both reconstructive and cosmetic procedures. With comprehensive training from prestigious institutions and fellowship from The Max Institute of Medical Education, New Delhi, Dr. Jain specializes in advanced reconstructive techniques, aesthetic procedures, burn care, and trauma management. Currently serving as Senior Consultant at Akropolis SuperSpeciality Hospital, he is committed to providing world-class plastic surgery services with patient safety and satisfaction as top priorities.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Kathmandu University',
        year: '2012'
      },
      {
        degree: 'MS - General Surgery',
        institution: 'Maharishi Markandeshwar University, Ambala',
        year: '2017'
      },
      {
        degree: 'MCh - Plastic Surgery',
        institution: 'Baba Farid University of Health Sciences',
        year: '2021'
      },
      {
        degree: 'Fellowship in Plastic Surgery',
        institution: 'The Max Institute of Medical Education, New Delhi',
        year: '2022'
      }
    ],
    services: [
      'Reconstructive Surgery',
      'Cosmetic & Aesthetic Procedures',
      'Burn Care & Reconstruction',
      'Trauma & Wound Management',
      'Facial Reconstruction',
      'Breast Reconstruction',
      'Hand Surgery',
      'Scar Revision',
      'Skin Cancer Reconstruction',
      'Body Contouring',
      'Rhinoplasty',
      'Blepharoplasty',
      'Liposuction',
      'Facial Rejuvenation'
    ],
    positions: [
      {
        title: 'Senior Consultant, Plastic & Reconstructive Surgery',
        organization: 'Akropolis SuperSpeciality Hospital, Badshahpur, Gurgaon',
        period: 'Present'
      }
    ]
  },
  {
    id: 'dr-naresh-kumar',
    name: 'Dr. Naresh Kumar',
    specialization: 'Orthopedic Surgeon',
    qualification: 'MBBS, MS (Orthopaedics)',
    experience: '8+ years',
    opdTiming: 'Mon-Sat: 9:00 AM - 3:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/DR. NARESH-KUMAR.png',
    department: 'Orthopedics',
    registrationVerified: true,
    description: 'Dr. Naresh Kumar is a skilled Orthopaedic Surgeon with over 8 years of experience in treating a wide range of musculoskeletal conditions. His expertise includes managing complex cases of Achilles Tendon Rupture and Achilles Tendon Tear, providing patients with advanced care and innovative treatment options.',
    services: ['Achilles Tendon Rupture Treatment', 'Achilles Tendon Tear', 'Achondroplasia Treatment', 'Amputee Care', 'Ankle Brachial Index', 'Complex Orthopedic Cases']
  },
  {
    id: 'dr-ankit-garg',
    name: 'Dr. Ankit Garg',
    specialization: 'Internal Medicine Physician',
    qualification: 'MBBS, DNB - Internal Medicine',
    experience: '8+ years',
    yearsAsSpecialist: '2 years as specialist',
    opdTiming: 'Mon-Fri: 9:00 AM - 5:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/DR. ANKIT-GARG.png',
    department: 'Internal Medicine',
    registrationVerified: true,
    description: 'Dr. Ankit Garg is a skilled Internal Medicine Physician with expertise in diagnosing and treating complex medical conditions. He specializes in chronic disease management, infectious diseases, tropical diseases (HIV/TB), and antibiotic stewardship. With a patient-centered approach, he ensures accurate evaluation, treatment, and long-term management of health conditions while coordinating with specialists for comprehensive care. Dr. Garg combines clinical expertise with compassionate care, ensuring the highest standards of internal medicine practice.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Government Medical College, Patiala',
        year: '2019'
      },
      {
        degree: 'DNB - Internal Medicine',
        institution: 'Medanta Medicity, Gurugram',
        year: '2023'
      }
    ],
    services: [
      'Patient Care & Inpatient Management',
      'Chronic Disease Management',
      'Infectious Disease Treatment',
      'HIV & TB Management',
      'Tropical Disease Treatment',
      'Antibiotic Stewardship for Resistant Infections',
      'Emergency Medical Care',
      'Post-Operative Care',
      'Geriatric Medicine',
      'Preventive Care & Health Counseling',
      'Lifestyle & Medication Management',
      'Diagnostic Evaluation & Treatment Planning'
    ],
    positions: [
      {
        title: 'Consultant, Internal Medicine',
        organization: 'Akropolis Superspeciality Hospital',
        period: '2024 - Present'
      },
      {
        title: 'Consultant, Internal Medicine',
        organization: 'Fortis Hospital, Manesar',
        period: '2023 - 2024'
      },
      {
        title: 'DNB Resident, Internal Medicine',
        organization: 'Medanta Medicity, Gurugram',
        period: '2020 - 2023'
      },
      {
        title: 'Medical Officer',
        organization: 'Government Medical College, Patiala',
        period: '2013 - 2019'
      }
    ],
    email: 'ritish.ankit@gmail.com',
    phone: '+91-9729699646'
  },
  {
    id: 'dr-subhash-chanana',
    name: 'Dr. Subhash Chandra Chanana',
    specialization: 'Senior Consultant - General & Onco Surgery',
    qualification: 'MBBS, MS (General Surgery), FACS (Onco Surgery)',
    experience: '50+ years',
    yearsAsSpecialist: '45+ years as specialist',
    opdTiming: 'Mon-Sat: 10:00 AM - 4:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/Dr. Subhash-Chandra.png',
    department: 'General & Oncology Surgery',
    registrationVerified: true,
    description: 'Dr. Subhash Chandra Chanana is a highly distinguished General and Oncological Surgeon with over five decades of medical experience. Dedicated to serving humanity by reducing pain and suffering, he has devoted his life to fighting and eliminating cancer through advanced surgical care, patient support, and ongoing medical research. With extensive international experience including specialized training from the University of Vienna, Austria, and practice in Libya and Spain, Dr. Chanana brings a wealth of expertise in cancer surgery and general surgical procedures. His military service and leadership roles have shaped his disciplined approach to patient care and medical excellence.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Medical College',
        year: '1970'
      },
      {
        degree: 'MS - General Surgery',
        institution: 'S.P. Medical College & PBM Hospital, Bikaner, Rajasthan',
        year: '1980'
      },
      {
        degree: 'FACS (Onco Surgery)',
        institution: 'University of Vienna, A.M.S, Austria',
        year: '1992'
      }
    ],
    services: [
      'Oncological Surgery',
      'Cancer Treatment & Management',
      'General Surgery',
      'Breast Cancer Surgery',
      'Gastrointestinal Cancer Surgery',
      'Surgical Oncology',
      'Cancer Diagnosis & Staging',
      'Tumor Resection',
      'Minimally Invasive Cancer Surgery',
      'Post-Operative Cancer Care',
      'Palliative Surgery',
      'Cancer Screening & Early Detection'
    ],
    positions: [
      {
        title: 'Senior Consultant, General & Onco Surgery',
        organization: 'Akropolis Superspeciality Hospital',
        period: 'Present'
      },
      {
        title: 'Medical Superintendent & Senior Consultant',
        organization: 'Friends Medical Center, Delhi / SSPR Centre / Red Cross Hospital / Kosmos Hospital',
        period: '2001-2024'
      },
      {
        title: 'General & Onco Surgeon',
        organization: 'Central Hospital, Garian, Libya',
        year: '1996-2001'
      },
      {
        title: 'President, Medical Board for Disabled',
        organization: 'Libya',
        period: 'till 2000'
      },
      {
        title: 'General Surgeon',
        organization: 'INAS (Red Cross) Hospital, Garian, Libya',
        period: '1981-1995'
      },
      {
        title: 'Honorary Surgeon',
        organization: 'Dept. of Surgery, S.P. Medical College, Bikaner',
        period: '1980-1981'
      },
      {
        title: 'Army Medical Corps - Lieutenant, Captain, Major',
        organization: 'Indian Army',
        period: '1970-1980'
      }
    ],
    publications: [
      'Published research on Mammography of Breast Lumps (1980)',
      'Research on marine-based raw product for cancer treatment with promising results',
      'Attended International & National Oncology Conferences (Vienna 1992, Delhi 2004-2008)',
      'Chairperson, ONCON 2008 - "Diagnosing Cancer Early," Galaxy Cancer Institute, Delhi',
      'Contributed to Indo-US Meet (2007) on Emergency Medicine & Post-Nuclear War Causalities'
    ],
    memberships: [
      'Founder Trustee - SSPR Foundation',
      'Chairman - Denovo Welfare Society (NGO)',
      'Fellow of the American College of Surgeons (FACS)',
      'Faculty - Dept. of General Surgery, Garian Hospital, Libya (1995-2001)',
      'Postgraduate Faculty - University of Vienna (1992)'
    ]
  },
  {
    id: 'dr-jona-garikana',
    name: 'Dr. Jona Manohar Garikana',
    specialization: 'Internal Medicine Physician',
    qualification: 'MBBS, DNB - Internal Medicine',
    experience: '14+ years',
    yearsAsSpecialist: '5+ years as specialist',
    opdTiming: 'Mon-Sat: 9:00 AM - 5:00 PM',
    image: 'https://brandingpioneers.co.in/akropolis/Jona-Manohar-Garikana.png',
    department: 'Internal Medicine',
    registrationVerified: true,
    description: 'Dr. Jona Manohar Garikana is an accomplished Internal Medicine Physician with extensive international training and research experience. With a strong foundation from Rangaraya Medical College and specialized training at prestigious institutions including the University of Illinois Chicago, University of Nebraska Medical Center, and Swedish Covenant Hospital, Dr. Garikana brings a global perspective to patient care. His research on parasitic infections and infectious diseases, combined with clinical experience at leading hospitals including Medanta Medicity and Fortis Hospital, makes him well-equipped to handle complex medical conditions. He is dedicated to evidence-based medicine and comprehensive patient management.',
    education: [
      {
        degree: 'MBBS',
        institution: 'Rangaraya Medical College, Kakinada, India',
        year: '2011'
      },
      {
        degree: 'DNB - Internal Medicine',
        institution: 'National Board of Examinations',
        year: '2020'
      }
    ],
    services: [
      'Comprehensive Internal Medicine',
      'Infectious Disease Management',
      'Parasitic Infection Treatment',
      'Chronic Disease Management',
      'General Medicine',
      'Preventive Healthcare',
      'Diagnostic Evaluation',
      'Diabetes Management',
      'Hypertension Treatment',
      'Cardiovascular Disease Management',
      'Nephrology Consultation',
      'Emergency Medical Care'
    ],
    positions: [
      {
        title: 'Consultant, Internal Medicine',
        organization: 'Akropolis Hospital, Vatika Chowk',
        period: 'February 2025 - Present'
      },
      {
        title: 'Consultant, Internal Medicine',
        organization: 'Fortis Hospital, Manesar',
        period: 'October 2024 - Present'
      },
      {
        title: 'DNB Resident & Consultant',
        organization: 'Medanta the Medicity',
        period: 'August 2020 - October 2024'
      },
      {
        title: 'General Physician',
        organization: 'Sri Siva Naidu Clinic, Visakhapatnam',
        period: 'May 2018 - January 2020'
      },
      {
        title: 'Medical Officer',
        organization: 'Life Line Hospital, Kakinada',
        period: 'October 2011 - May 2015'
      }
    ],
    publications: [
      'Research: Prevalence of parasitic infections among recent immigrants in Chicago - University of Illinois, Chicago (December 2015)',
      'Award: Best Presentation in Pathology - Medical Exhibition, Rangaraya Medical College (2007)',
      'Multimedia Presentation: Risk factors of type 2 DM in the general population - Rangaraya Medical College (2007)'
    ],
    email: 'garikana.jona@gmail.com'
  }
];