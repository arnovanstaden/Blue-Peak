import PlumbingImage from '@static/images/plumbing.jpg';
import HeatingImage from '@static/images/heating.jpeg';
import GasImage from '@static/images/gas.jpeg';
import CocImage from '@static/images/coc.jpeg';

export const servicesData = [
  {
    name: 'Plumbing',
    description: 'Expert plumbing solutions for your every need',
    image: PlumbingImage,    services: [
      'General Plumbing',
      'Geyser Installations',
      'Blocked Drains',
      'Backup water solutions',
      'Water lines',
      'Waste lines',
      'Gas piping',
      'Taps and Valves'
    ]
  },
  {
    name: 'Heating',
    description: 'Stay warm with our premium heating services',
    image: HeatingImage,
    services: [
      'Electric geysers',
      'Solar geysers',
      'Gas Geysers',
      'Geyser Maintenance',
      'Geyser Replacements',
      'Heat Pumps',
      'Gas Fireplaces'
    ]
  },
  {
    name: 'Gas',
    description: 'Efficient gas solutions tailored to your needs',
    image: GasImage,
    services: [
      'Gas Certificate of Compliance.',
      'Installation of all Gas Appliances',
      'Gas Geysers',
      'Stoves',
      'Fireplaces',
      'Gas leaks'
    ]
  },
  {
    name: 'Certificates of Compliance',
    description: 'Ensuring safety and compliance with every installation',
    image: CocImage,
    services: [
      `Our team has all the right licenses and certificates as we are registered at:
       \n - LPGSA (Liquefied Petroleum Gas Association of South Africa)
       \n - QCTO (Quality Council for Trades & Occupations)
      `,
      'We offer Certificates of compliance for gas and plumbing installations.'
    ]
  },
]

export default servicesData;

