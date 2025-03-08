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
      name: 'John Smith',
      text: 'Excellent work that exceeded our expectations. Highly recommended!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531'
    },
    {
      name: 'Sarah Johnson',
      text: 'Awesome work with incredible results. Will definitely hire again.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378'
    },
    {
      name: 'Michael Chen',
      text: 'Very well done with great attention to detail. Absolutely professional.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326'
    },
    {
      name: 'Emily Taylor',
      text: 'Stunning design and flawless execution. Exactly what we needed.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595'
    },
    {
      name: 'David Wong',
      text: 'Innovative approach to problem solving. Creative and efficient.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/7.jpg?v=1733139275056'
    },
    {
      name: 'Jessica Martinez',
      text: 'Truly impressive work delivered on time. A pleasure to work with.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968'
    },
    {
      name: 'Robert Kim',
      text: 'Great job, team! Would hire again for all our future projects.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531'
    },
    {
      name: 'Amanda Lewis',
      text: "Perfectly executed plan with amazing results. Couldn't be happier.",
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595'
    },
    {
      name: 'Thomas Wilson',
      text: 'Very satisfied with all aspects of work. Professional and responsive.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/6.jpg?v=1733139270080'
    },
    {
      name: 'Lisa Garcia',
      text: 'Excellent communication and project management. Always on schedule.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326'
    },
    {
      name: 'James Brown',
      text: 'Stunning visuals and great functionality. Modern and user-friendly.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378'
    },
    {
      name: 'Sophia Lee',
      text: 'Innovative solutions to complex challenges. Smart and efficient work.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/6.jpg?v=1733139270080'
    },
    {
      name: 'Daniel Miller',
      text: 'Immersive experience and intuitive design. Really impressed our team.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531'
    },
    {
      name: 'Olivia Scott',
      text: 'Visionary approach to modern problems. Ahead of the competition.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968'
    },
    {
      name: 'Ryan Patel',
      text: 'Truly impressive team working seamlessly. Great collaboration.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/7.jpg?v=1733139275056'
    },
    {
      name: 'Emma Rodriguez',
      text: 'Very satisfied client returning for more. That says it all!',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595'
    },
    {
      name: 'Kevin White',
      text: 'Robust solutions with long-term stability. Built to last.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326'
    },
    {
      name: 'Natalie Clark',
      text: 'Great job on all aspects of the project. Highly professional service.',
      image: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531'
    }
  ],

  // Rest of the content remains the same
  about: ['About line 1', 'About line 2', 'About line 3'],
  contactLinks: {
    Email: [
      {
        label: 'mazzerx.connect@gmail.com',
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
