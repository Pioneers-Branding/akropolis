export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  available247?: boolean;
}

export const services: Service[] = [
  {
    id: 'ct-scan',
    name: 'CT Scan',
    description: 'Advanced computed tomography imaging for precise diagnosis',
    icon: 'Scan'
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy',
    description: 'Minimally invasive diagnostic and therapeutic procedures',
    icon: 'Eye'
  },
  {
    id: 'colonoscopy',
    name: 'Colonoscopy',
    description: 'Comprehensive colon examination and screening for early cancer detection',
    icon: 'Search'
  },
  {
    id: 'bronchoscopy',
    name: 'Bronchoscopy',
    description: 'Advanced bronchoscopic procedures for respiratory system diagnosis',
    icon: 'Activity'
  },
  {
    id: 'dialysis',
    name: 'Dialysis',
    description: 'State-of-the-art kidney dialysis treatment center',
    icon: 'Activity',
    available247: true
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    description: 'Comprehensive diagnostic testing and pathology services',
    icon: 'TestTube'
  }
];