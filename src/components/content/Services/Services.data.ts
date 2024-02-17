import PlumbingImage from '@static/images/plumbing.jpg';
import HeatingImage from '@static/images/heating.jpeg';
import GasImage from '@static/images/gas.jpeg';
import CocImage from '@static/images/coc.jpeg';

export const servicesData = [
  {
    name: 'Plumbing',
    description: 'lorem ipsum dolor sit amet',
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
    description: 'lorem ipsum dolor sit amet',
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
    description: 'lorem ipsum dolor sit amet',
    image: GasImage,
    services: [
      'Gas Certificate of Compliance.',
      'Installation of all Gas Appliances',
      'Water Heaters',
      'Stoves',
      'Fireplaces',
      'Residential and Commercial Installations and maintenance.'
    ]
  },
  {
    name: 'Certificates of Compliance',
    description: 'lorem ipsum dolor sit amet',
    image: CocImage,
    services: [
      'Our team has all the right licenses and certificates as we are registered at:',
      'LPGSA (Liquefied Petroleum Gas Association of South Africa)',
      'QCTO (Quality Council for Trades & Occupations)',
      'We offer Certificates of compliance for gas and plumbing installations.'
    ]
  },
]

export default servicesData;

