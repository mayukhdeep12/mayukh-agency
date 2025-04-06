import Script from 'next/script';

import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import { HOME_SCHEMA } from '@/constants';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Review from './components/Skills';

// Sample data
const sampleContent = {
  review: [
    {
      name: 'John Doe, General Manager',
      text: 'Mazzerx AI bot boosted our guest satisfaction. It’s efficient and easy to use—our team loves it!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    },
    {
      name: 'Lisa Carter, Owner',
      text: 'Mazzerx built us a stunning website with an AI bot, It helps clients plan trips effortlessly and saves us time.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531',
      country: 'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg'
    },
    {
      name: 'Jane Smith, IT Manager',
      text: 'The AI bot handles inquiries 24/7. It’s reduced our workload and impressed our guests!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    },
    {
      name: 'Dr. Emily Johnson, CEO',
      text: 'Amazing work Mazzerx it detects ailments accurately and sets appointments fast. It’s a game-changer for us.',
      image:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/generate-a-female-person-ultra-realistic-image.jpg?v=1740756037246',
      country:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/images%20(1).png?v=1741715000285'
    },
    {
      name: 'Dr. Suraj Patel, Dermatologist',
      text: 'lifesaver for busy days. It’s spot-on and helps us care better.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968',
      country:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
    },
    {
      name: 'David Lee, Founder',
      text: 'Mazzerx created an amazing website for us, Customers love customizing their cars right on the page.',
      image:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/generate-a-male-asian-person-ultra-realistic-image.jpg?v=1740756034502',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    },
    {
      name: 'John Doe, General Manager',
      text: 'Mazzerx AI bot boosted our guest satisfaction. It’s efficient and easy to use—our team loves it!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    },
    {
      name: 'Lisa Carter, Owner',
      text: 'Mazzerx built us a stunning website with an AI bot, It helps clients plan trips effortlessly and saves us time.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531',
      country: 'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg'
    },
    {
      name: 'Jane Smith, IT Manager',
      text: 'The AI bot handles inquiries 24/7. It’s reduced our workload and impressed our guests!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    },
    {
      name: 'Dr. Emily Johnson, CEO',
      text: 'Amazing work Mazzerx it detects ailments accurately and sets appointments fast. It’s a game-changer for us.',
      image:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/generate-a-female-person-ultra-realistic-image.jpg?v=1740756037246',
      country:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/images%20(1).png?v=1741715000285'
    },
    {
      name: 'Dr. Suraj Patel, Dermatologist',
      text: 'lifesaver for busy days. It’s spot-on and helps us care better.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968',
      country:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
    },
    {
      name: 'David Lee, Founder',
      text: 'Mazzerx created an amazing website for us, Customers love customizing their cars right on the page.',
      image:
        'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/generate-a-male-asian-person-ultra-realistic-image.jpg?v=1740756034502',
      country:
        'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'
    }
  ],

  // Rest of the content remains the same
  about: ['About line 1', 'About line 2', 'About line 3'],
  contactLinks: {
    Email: [
      {
        label: 'connect@mazzerx.com',
        href: 'mailto:mazzerx.connect@gmail.com',
        value: 'mazzerx.connect@gmail.com'
      }
    ],
    socials: [
      { label: 'Twitter', href: 'https://twitter.com/MazzerxConnect', value: 'Twitter' },
      { label: 'Instagram', href: 'https://www.instagram.com/mazzerx.connect', value: 'Instagram' }
    ]
  },
  otherLinks: {
    spotify: 'https://open.spotify.com/user/example'
  }
};

export default async function Portfolio() {
  const content = sampleContent;

  return (
    <main>
      <Loader />
      <Landing />
      <Projects />
      <Review review={content.review || []} />
      <About about={content.about || []} spotify={content.otherLinks.spotify || ''} />
      <Contacts contacts={content.contactLinks || {}} />

      <Toast />
      <Script
        id='structured-schema'
        type='application/ld+json'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{ __html: HOME_SCHEMA }}
      />
    </main>
  );
}

export const dynamic = 'force-static';
