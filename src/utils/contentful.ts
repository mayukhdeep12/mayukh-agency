import { cache } from 'react';

// Sample data to replace Contentful API calls
const sampleProjects = [
  {
    name: 'Web-Solutions',
    slug: 'designing',
    tags: ['Website Design', 'Website Development', 'Search Engines'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/Generated%20Image%20March%2028%2C%202025%20-%2011_11PM.jpeg?v=1743185372268',
      alt: 'Project 1 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Website Design',
          paragraph:
            'Our website design services focus on creating visually stunning, user-friendly, and brand-aligned interfaces that enhance user engagement and retention. By leveraging modern design principles, we ensure an intuitive and seamless user experience across all devices.'
        },
        {
          subheading: 'Website Development',
          paragraph:
            'We specialize in developing robust and scalable websites that offer optimal performance and security. Our web development solutions incorporate the latest technologies to ensure seamless functionality and business growth.'
        },
        {
          subheading: 'Search Engines',
          paragraph:
            'Enhancing search engine visibility is crucial for business success. We implement best SEO practices, structured data, and content optimization to improve rankings and drive organic traffic.'
        }
      ]
    }
  },
  {
    name: 'AI-Solutions',
    slug: 'generative-ai',
    tags: ['Conversational AI', 'Speech AI', 'Generative AI'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1b446e9ae1552e26b9f0be8125c8fadf.jpg?v=17328237174589',
      alt: 'Project 2 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Conversational AI',
          paragraph:
            'Our Conversational AI solutions enhance customer interactions through intelligent chatbots and virtual assistants. These AI-driven systems enable natural conversations, improving user experience and operational efficiency.'
        },
        {
          subheading: 'Speech AI',
          paragraph:
            'With advanced Speech AI technologies, we offer real-time speech recognition, voice synthesis, and multilingual support, enabling seamless communication across different industries and platforms.'
        },
        {
          subheading: 'Generative AI',
          paragraph:
            'Our Generative AI solutions empower businesses with content generation, image synthesis, and video AI capabilities, revolutionizing creativity and automation in various sectors.'
        }
      ]
    }
  },
  {
    name: 'Immersive-Apps',
    slug: 'xr-experiences',
    tags: ['Augmented Reality', 'Virtual Reality', 'XR Experiences'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/image.jpg?v=1743185567106',
      alt: 'Project 3 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Augmented Reality',
          paragraph:
            'Our AR solutions blend the digital and physical worlds to create engaging and interactive user experiences. We develop AR applications for retail, training, and entertainment, enhancing user immersion.'
        },
        {
          subheading: 'Virtual Reality',
          paragraph:
            'We build VR environments that transport users into fully immersive digital spaces, enabling industries like gaming, education, and real estate to offer captivating and realistic experiences.'
        },
        {
          subheading: 'XR Experiences',
          paragraph:
            'Extended Reality (XR) encompasses AR, VR, and MR solutions that redefine interaction and engagement. Our expertise in XR development pushes the boundaries of innovation and storytelling.'
        }
      ]
    }
  },
  {
    name: 'MedTech',
    slug: 'med-tech',
    tags: ['Medical Imaging', 'AI Solutions', 'Medical Devices'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/geergeeg.jpg?v=1743185807587',
      alt: 'Project 4 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Medical Imaging',
          paragraph:
            'We revolutionize medical imaging by leveraging AI-driven analysis and enhancement techniques. Our solutions assist radiologists in detecting anomalies and improving diagnostic accuracy.'
        },
        {
          subheading: 'AI Solutions',
          paragraph:
            'Our AI-powered healthcare tools streamline workflows, enhance decision-making, and optimize patient care through predictive analytics and automation.'
        },
        {
          subheading: 'Medical Devices',
          paragraph:
            'We integrate AI capabilities into medical devices, enhancing their precision and efficiency. Our innovations contribute to improved healthcare delivery and patient outcomes.'
        }
      ]
    }
  }
];

// const sampleContent = {
//   about: "About line 1\nAbout line 2",
//   review: ["Skill 1", "Skill 2"],
//   navLinks: {
//     home: "/",
//     projects: "/services"
//   },
//   contactLinks: {
//     email: "contact@example.com",
//     phone: "123-456-7890"
//   },
//   otherLinks: {
//     github: "https://github.com/example",
//     linkedin: "https://linkedin.com/in/example"
//   }
// };

// Mock function to mimic getBase64
const getBase64 = async (src: string) => {
  // Return a placeholder base64 string for demonstration purposes
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...';
};

// Mimic the structure of Asset and fields for sample data
interface Asset<T, U> {
  fields: {
    file: {
      url: U;
    };
    description?: T;
  };
}

interface ProjectsSkeleton {
  fields: {
    name: string;
    slug: string;
    tags: string[];
    image: Asset<undefined, string>;
    index: number;
    detailedContent: {
      sections: {
        subheading: string;
        paragraph: string;
        image: Asset<undefined, string>;
      }[];
    };
  };
}

interface ProjectSkeleton {
  fields: {
    name: string;
    slug: string;
    tags: string[];
    image: Asset<undefined, string>;
    detailedContent: {
      sections: {
        subheading: string;
        paragraph: string;
        image: Asset<undefined, string>;
      }[];
    };
  };
}

interface ContentSkeleton {
  fields: {
    about: string;
    review: string[];
    navLinks: {
      data: {
        [key: string]: string;
      };
    };
    contacts: {
      [key: string]: string;
    };
    otherLinks: {
      [key: string]: string;
    };
  };
}

export const getAllProjects = cache(async () => {
  try {
    const projects = await Promise.all(
      sampleProjects.map(async (project) => {
        const imgSrc = project.image.src;
        const imgBase64 = await getBase64(imgSrc);

        const detailedSections = await Promise.all(
          project.detailedContent.sections.map(async (section) => {
            // const sectionImgBase64 = await getBase64(section.image.src);
            return {
              subheading: section.subheading,
              paragraph: section.paragraph
              // image: {
              //   src: section.image.src,
              //   alt: section.image.alt,
              //   base64: sectionImgBase64
              // }
            };
          })
        );

        return {
          name: project.name,
          slug: project.slug,
          tags: project.tags,
          image: {
            src: imgSrc,
            alt: project.image.alt,
            base64: imgBase64
          },
          detailedContent: {
            sections: detailedSections
          }
        };
      })
    );

    return projects;
  } catch (error) {
    console.error(error);
  }
});

export const getSingleProject = cache(async (slug_: string) => {
  try {
    const project = sampleProjects.find((project) => project.slug === slug_);
    if (!project) throw new Error('Project not found');

    const imgSrc = project.image.src;
    const imgBase64 = await getBase64(imgSrc);

    const detailedSections = await Promise.all(
      project.detailedContent.sections.map(async (section) => {
        // const sectionImgBase64 = await getBase64(section.image.src);
        return {
          subheading: section.subheading,
          paragraph: section.paragraph
          // image: {
          //   src: section.image.src,
          //   alt: section.image.alt,
          //   base64: sectionImgBase64
          // }
        };
      })
    );

    return {
      ...project,
      image: {
        src: imgSrc,
        alt: project.image.alt,
        base64: imgBase64
      },
      detailedContent: {
        sections: detailedSections
      }
    };
  } catch (error) {
    console.error(error);
  }
});

// export const getContent = cache(async () => {
//   try {
//     return {
//       about: sampleContent.about.split(/\r?\n/).filter((line: string) => line.trim() !== '') || [],
//       review: sampleContent.review || [],
//       navLinks: sampleContent.navLinks || {},
//       contactLinks: sampleContent.contactLinks || {},
//       otherLinks: sampleContent.otherLinks || {}
//     };
//   } catch (error) {
//     console.error(error);
//   }
// });
