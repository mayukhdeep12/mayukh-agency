import { cache } from 'react';

import { ProjectProperties } from '@/types';

// Assuming types are in '@/types'

// Sample data to replace Contentful API calls
const sampleProjects = [
  {
    name: 'Web_Solutions',
    slug: 'designing',
    tags: ['UI/UX', 'Web App Development', 'E-commerce Development'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/Generated%20Image%20March%2028%2C%202025%20-%2011_11PM.jpeg?v=1743185372268',
      alt: 'Modern website interface design'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Creative UI/UX Design',
          paragraph:
            'At Mazzerx, we create visually stunning and user-friendly website designs that truly represent your brand. Our design team focuses on crafting intuitive interfaces that guide visitors naturally through your content, enhancing user engagement and boosting conversion rates. We combine aesthetic appeal with practical functionality to ensure your website stands out while delivering a seamless experience across all devices.'
        },
        {
          subheading: 'Custom Web App Development',
          paragraph:
            "We build powerful, custom web applications tailored to your specific business needs. Our development team uses the latest technologies to create scalable, secure, and high-performance solutions that streamline your operations. Whether you need internal tools, customer portals, or complex business systems, Mazzerx delivers web applications that help your business grow and adapt in today's digital landscape."
        },
        {
          subheading: 'Complete E-commerce Development',
          paragraph:
            'Turn your products into online sales success with our comprehensive e-commerce solutions. At Mazzerx, we develop online stores that not only look great but drive real business results. Our e-commerce platforms include everything from attractive product displays and secure payment processing to inventory management systems and customer account features. We ensure your online store provides a shopping experience that keeps customers coming back.'
        }
      ]
    }
  },
  {
    name: 'AI_Solutions',
    slug: 'generative-ai',
    tags: ['Conversational AI', 'Speech AI', 'Generative AI', 'Automations'],
    image: {
      src: 'https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1b446e9ae1552e26b9f0be8125c8fadf.jpg?v=17328237174589',
      alt: 'Abstract representation of artificial intelligence'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Smart Conversational AI',
          paragraph:
            'Mazzerx creates intelligent chatbots and virtual assistants that understand natural language and engage meaningfully with your customers. Our conversational AI solutions handle inquiries, gather information, and provide assistance 24/7 without human intervention. We design these systems to reflect your brand voice while delivering personalized experiences that improve customer satisfaction and reduce operational costs through automation of routine interactions.'
        },
        {
          subheading: 'Innovative Speech AI',
          paragraph:
            'Our speech recognition and voice synthesis technologies enable hands-free interaction with your systems and services. At Mazzerx, we develop applications that accurately transcribe spoken words, convert text to natural-sounding speech, understand multiple languages, and make your digital services more accessible. These solutions power everything from voice-controlled applications to automated transcription services for meetings and customer support.'
        },
        {
          subheading: 'Creative Generative AI',
          paragraph:
            'Let AI handle your content creation needs! Mazzerx builds generative AI solutions that produce written content, images, data variations, and even video elements automatically. Our systems help you scale content production, generate fresh creative ideas, and automate repetitive tasks. We tailor these powerful tools to maintain your brand guidelines while exploring new creative possibilities that would be time-consuming or impossible to produce manually.'
        },
        {
          subheading: 'Intelligent Automations',
          paragraph:
            "We create smart systems that handle repetitive tasks automatically, freeing your team to focus on what matters most. Mazzerx's automation solutions monitor workflows, make decisions based on your business rules, and complete actions without human intervention. From document processing and data entry to complex business processes, our automations reduce errors, increase efficiency, and ensure consistency across your operations."
        }
      ]
    }
  },
  {
    name: 'Immersive_XR',
    slug: 'xr-experiences',
    tags: ['Augmented Reality', 'Virtual Reality', 'Extended Reality'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/image.jpg?v=1743185567106',
      alt: 'Person using a VR headset in an immersive environment'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Interactive Augmented Reality',
          paragraph:
            'Mazzerx overlays digital information onto the real world, creating AR experiences that transform how people interact with your products and services. Our augmented reality applications help customers visualize products in their own space, follow visual instructions step-by-step, engage with interactive marketing materials, and learn through immersive educational content. We make the invisible visible and add digital depth to physical experiences, creating memorable connections with your audience.'
        },
        {
          subheading: 'Immersive Virtual Reality',
          paragraph:
            'Step into completely digital environments with our VR solutions that transport users to new worlds. At Mazzerx, we create virtual experiences for gaming, detailed property tours, architectural previews, collaborative remote workspaces, therapeutic applications, and realistic training simulations. Our VR applications deliver powerful immersion that captivates users, making complex information more understandable and creating emotional connections impossible with traditional media.'
        },
        {
          subheading: 'Comprehensive Extended Reality',
          paragraph:
            "Mazzerx combines AR, VR, and mixed reality approaches to create seamless transitions between physical and digital experiences. Our XR solutions redefine how users interact with digital content, tell compelling stories, and solve practical problems across industries. We develop these comprehensive experiences for training, education, entertainment, marketing, and remote collaboration, breaking down the barriers between what's real and what's possible."
        }
      ]
    }
  },
  {
    name: 'MedTech',
    slug: 'med-tech',
    tags: ['AI Medical Imaging', 'Healthcare AI Solutions', 'Smart Medical Devices'],
    image: {
      src: 'https://cdn.glitch.global/46879755-384b-458c-8e34-44441dca5e88/geergeeg.jpg?v=1743185807587',
      alt: 'Advanced medical imaging technology display'
    },
    detailedContent: {
      sections: [
        {
          subheading: 'Advanced AI Medical Imaging',
          paragraph:
            'Mazzerx develops AI algorithms that help medical professionals see more in imaging data. Our technology enhances image clarity, automatically detects potential issues, provides precise measurements, and improves both the speed and accuracy of diagnoses. We work closely with healthcare providers to create solutions that integrate seamlessly into existing workflows, supporting radiologists and clinicians with powerful analysis tools that identify patterns and anomalies human eyes might miss.'
        },
        {
          subheading: 'Intelligent Healthcare AI Solutions',
          paragraph:
            "We build smart software that improves healthcare delivery across the entire patient journey. Mazzerx's healthcare AI systems help clinicians make better decisions through predictive analytics, optimize hospital resources and staffing, streamline clinical documentation, and identify at-risk patients earlier. Our solutions reduce administrative burden on healthcare professionals while providing them with timely, relevant insights that lead to better patient outcomes and more efficient operations."
        },
        {
          subheading: 'Innovative Smart Medical Devices',
          paragraph:
            'Mazzerx enhances medical equipment with advanced AI capabilities that make healthcare more precise and accessible. We develop technology that improves diagnostic devices, assists with surgical procedures, enables remote monitoring, and creates personalized therapeutic tools. Our smart medical devices combine hardware expertise with sophisticated algorithms to extend the capabilities of healthcare providers, making treatments more effective, reducing recovery times, and improving the overall patient experience.'
        }
      ]
    }
  }
];

// Mock function to mimic getBase64 - replace with actual implementation if needed
const getBase64 = async (src: string): Promise<string> => {
  // In a real app, you'd fetch the image and convert it.
  // For this mock, we return a simple placeholder.
  // Use libraries like 'plaiceholder' or 'lqip-modern' for actual base64 generation at build time.
  console.log(`Mock getBase64 called for: ${src}`); // Log call for debugging
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='; // Tiny transparent pixel
};

// --- Fetch All Projects ---
// Uses React Cache for deduplication of requests within a single render pass
export const getAllProjects = cache(async (): Promise<ProjectProperties[] | undefined> => {
  console.log('Fetching all projects (mock)...');
  try {
    // Simulate network delay
    // await new Promise(resolve => setTimeout(resolve, 50));

    const projects = await Promise.all(
      sampleProjects.map(async (projectData) => {
        const imgSrc = projectData.image.src;
        // Fetch base64 concurrently (though it's mocked here)
        const imgBase64 = await getBase64(imgSrc);

        // Map sections directly, no need for async processing here as images aren't used in sections
        const detailedSections = projectData.detailedContent.sections.map((section) => ({
          subheading: section.subheading,
          paragraph: section.paragraph
          // If sections had images, you'd process their base64 here
        }));

        // Construct the project object matching ProjectProperties structure
        return {
          name: projectData.name,
          slug: projectData.slug,
          tags: projectData.tags,
          image: {
            src: imgSrc,
            alt: projectData.image.alt,
            base64: imgBase64 // Include the generated base64
          },
          detailedContent: {
            sections: detailedSections
          }
          // Add other potential fields if defined in ProjectProperties
          // index: projectData.index, // Example if index was part of your data
          // mdx: projectData.mdx, // Example if mdx content was part of your data
        };
      })
    );

    // You might want to sort projects here if needed, e.g., by an 'index' or 'date' field
    // projects.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));

    return projects as ProjectProperties[]; // Assert type matching the expected return type
  } catch (error) {
    console.error('Error fetching all projects (mock):', error);
    // Return undefined or an empty array based on how you want to handle errors downstream
    return undefined;
    // Or return [];
  }
});

// --- Fetch Single Project by Slug ---
// Uses React Cache for deduplication
export const getSingleProject = cache(
  async (slug: string): Promise<ProjectProperties | undefined> => {
    console.log(`Fetching single project with slug: ${slug} (mock)...`);
    try {
      // Simulate network delay
      // await new Promise(resolve => setTimeout(resolve, 50));

      const projectData = sampleProjects.find((p) => p.slug === slug);

      if (!projectData) {
        // console.warn(`Project with slug "${slug}" not found.`); // Log warning instead of throwing error immediately
        return undefined; // Return undefined if not found, let the calling page handle `notFound()`
      }

      const imgSrc = projectData.image.src;
      // Fetch base64 concurrently
      const imgBase64 = await getBase64(imgSrc);

      // Map sections
      const detailedSections = projectData.detailedContent.sections.map((section) => ({
        subheading: section.subheading,
        paragraph: section.paragraph
      }));

      // Construct the project object
      const project: ProjectProperties = {
        name: projectData.name,
        slug: projectData.slug,
        tags: projectData.tags,
        image: {
          src: imgSrc,
          alt: projectData.image.alt,
          base64: imgBase64
        },
        detailedContent: {
          sections: detailedSections
        }
        // index: projectData.index, // Add other fields if needed
        // mdx: projectData.mdx,
      };

      return project;
    } catch (error) {
      console.error(`Error fetching project with slug "${slug}" (mock):`, error);
      return undefined; // Return undefined on error
    }
  }
);

// --- Mock Content Fetch (if needed) ---
// Keep commented out if not currently used
/*
export const getContent = cache(async () => {
  console.log("Fetching content (mock)...");
  try {
    // Simulate delay
    // await new Promise(resolve => setTimeout(resolve, 50));

    const sampleContent = {
      about: "Line 1 about us.\nAnother line about our mission.",
      review: ["Skill A", "Skill B", "Technology C"],
      navLinks: { home: "/", projects: "/services", contact: "/contact" },
      contactLinks: { email: "info@mazzerx.com", phone: "+1-555-MAZZERX" },
      otherLinks: { github: "https://github.com/mazzerx", linkedin: "https://linkedin.com/company/mazzerx" }
    };

    return {
      about: sampleContent.about.split(/\r?\n/).filter((line: string) => line.trim() !== '') || [],
      review: sampleContent.review || [],
      navLinks: sampleContent.navLinks || {},
      contactLinks: sampleContent.contactLinks || {},
      otherLinks: sampleContent.otherLinks || {}
    };
  } catch (error) {
    console.error("Error fetching content (mock):", error);
    return undefined;
  }
});
*/
