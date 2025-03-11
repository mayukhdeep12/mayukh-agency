import { cache } from 'react';

// Sample data to replace Contentful API calls
const sampleProjects = [
  {
    name: 'Website',
    slug: 'designing',
    tags: ['Website Design', 'Website Development', 'Search Engines'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/e9681e37a42424a5ffd1833b7f34d87f.jpg?v=1732823655358',
      alt: 'Project 1 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Description',
          paragraph:
            "Our company is at the forefront of digital innovation, offering comprehensive solutions in web design, web development, and cutting-edge 3D website development. With a team of skilled professionals who are well-versed in the latest technologies and trends, we deliver tailored solutions that elevate your online presence. Our web design services focus on creating visually appealing and user-friendly interfaces that reflect your brand's uniqueness and enhance user engagement. In web development, we build robust and scalable platforms that drive functionality and performance, ensuring your website operates efficiently and meets your business needs. Moreover, our 3D website development capabilities allow us to bring immersive and interactive experiences to your users, setting you apart in the digital landscape. By leveraging trending tools and staying ahead of industry advancements, we ensure that our solutions are not only innovative but also future-proof, positioning your business for sustained success in the dynamic world of digital technology."
        }
      ]
    }
  },
  {
    name: 'AgenticAI',
    slug: 'generative-ai',
    tags: ['Conversational AI', 'AI Automation', 'Generative AI'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1b446e9ae1552e26b9f0be8125c8fadf.jpg?v=17328237174589',
      alt: 'Project 2 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Description',
          paragraph:
            'our company excels in developing cutting-edge Large Language Models (LLMs), video models, speech models, recognition models, and hardware robotic models. By leveraging the latest technological advancements and working with the most trending tools in the industry, our team is dedicated to delivering innovative and efficient solutions that cater to a wide range of applications and use cases. With a strong focus on research and development, we continuously push the boundaries of what is possible in the field of artificial intelligence, ensuring that our clients have access to the most advanced and effective tools available.'
        }
      ]
    }
  },
  {
    name: 'Immersive',
    slug: 'xr-experiences',
    tags: ['Augmented Reality', 'Virtual Reality'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/Close-Up%20Of%20Hand%20Holding%20Smartphone%20Displaying%20AR%20Armchair.png?v=1733598400164',
      alt: 'Project 2 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Description',
          paragraph:
            "our company is at the forefront of immersive technology, leveraging cutting-edge tools and platforms to create unparalleled experiences for our clients. Our AR offerings seamlessly blend digital elements with the real world, enhancing user interaction and providing valuable information in context, while our VR solutions transport users to entirely new environments, fostering engagement and innovation. With a deep understanding of the latest trends and a commitment to pushing the boundaries of what's possible, our team delivers tailored, high-impact AR and VR experiences that drive business success and captivate audiences."
        }
      ]
    }
  },
  {
    name: 'MedTech',
    slug: 'med-tech',
    tags: ['Computer Vision', 'Radiological Tools'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/Futuristic%20Medical%20Scene%20With%20Augmented%20Reality%20Interactions.png?v=1733598397585',
      alt: 'Project 2 Image'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Description',
          paragraph:
            'Our company is at the forefront of leveraging advanced computer vision technologies to revolutionize radiological tools in the medtech industry. With a team of experts deeply versed in artificial intelligence and machine learning, we develop innovative solutions that enhance diagnostic accuracy, streamline workflows, and improve patient outcomes. Our cutting-edge tools are designed to interpret complex medical images with precision, assisting healthcare professionals in making informed decisions. By integrating the latest trends and advancements in technology, we ensure that our solutions not only meet but exceed industry standards, providing unparalleled value to our clients.'
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
