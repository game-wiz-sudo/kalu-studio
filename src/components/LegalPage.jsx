
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/LegalPage.css';

const legalContent = {
  '/privacy-policy': {
    number: '01',
    title: 'Privacy Policy',
    updated: '20 October 2026',
    intro:
      'Your privacy matters. This policy explains how KALU.DEV approaches personal information and the technical information that may be processed when you visit this website.',

    sections: [
      {
        title: '1. About this website',
        paragraphs: [
          'KALU.DEV is the personal portfolio of Kalu Destiny, a front-end developer and web designer. This website presents professional information, work, skills, and ways to get in touch.',
          'Privacy questions can be directed to kaludestiny194@gmail.com.',
        ],
      },
      {
        title: '2. Information you provide',
        paragraphs: [
          'This portfolio does not currently provide a website contact form or account-registration system. You may choose to contact me through email or WhatsApp using the links provided on the website.',
          'When you contact me, the information you provide may be processed by the relevant email or messaging service and used to respond to your enquiry. Those services operate under their own privacy policies.',
        ],
      },
      {
        title: '3. Technical information',
        paragraphs: [
          'The website hosting provider and infrastructure may automatically process technical information such as IP addresses, browser details, requested pages, timestamps, and security logs. The information collected depends on the hosting provider and its configuration.',
          'I do not claim that the website collects no technical information. For details about hosting-related processing, consult the policies of the services used to operate the website.',
        ],
      },
      {
        title: '4. How information may be used',
        paragraphs: [
          'Information may be used to respond to enquiries, maintain website security, diagnose technical issues, and keep the website functioning correctly.',
          'Personal information is not knowingly collected through a dedicated form on this portfolio at present.',
        ],
      },
      {
        title: '5. Cookies and similar technologies',
        paragraphs: [
          'The website may use technologies that are necessary for hosting, security, or basic functionality. Whether cookies or other tracking technologies are set depends on the website configuration and services loaded by the browser.',
          'Refer to the Cookie Policy for further information. Before adding analytics, advertising, or other tracking services, this policy should be reviewed and updated to reflect their actual use.',
        ],
      },
      {
        title: '6. Third-party services',
        paragraphs: [
          'Links on this website may take you to third-party services, including GitHub, WhatsApp, and your email provider. When you visit or use those services, their own privacy practices apply.',
          'I do not control the privacy practices of third-party websites.',
        ],
      },
      {
        title: '7. Data retention and security',
        paragraphs: [
          'Information received through direct communication may be retained for as long as reasonably necessary to handle the enquiry, maintain relevant records, or meet applicable obligations.',
          'Reasonable care should be taken to protect information, but no internet transmission or storage system can be guaranteed to be completely secure.',
        ],
      },
      {
        title: '8. Your privacy rights',
        paragraphs: [
          'Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of personal information, or to object to certain processing.',
          'To make a privacy enquiry, email kaludestiny194@gmail.com. Requests will be considered in accordance with applicable law.',
        ],
      },
      {
        title: '9. International visitors',
        paragraphs: [
          'This portfolio may be accessed from Nigeria and other countries. Hosting and third-party service providers may process technical information in locations outside your country.',
          'Any applicable data-protection requirements should be assessed according to the actual services used and the circumstances of the processing.',
        ],
      },
      {
        title: '10. Changes to this policy',
        paragraphs: [
          'This policy may be updated when the website, its services, or applicable requirements change. The updated version will be published on this page with a revised date where appropriate.',
        ],
      },
      {
        title: '11. Contact',
        paragraphs: [
          'For questions about this Privacy Policy, contact Kalu Destiny at kaludestiny194@gmail.com.',
        ],
      },
    ],
  },

  '/terms-of-use': {
    number: '02',
    title: 'Terms of Use',
    updated: '20 October 2026',
    intro:
      'These terms govern your use of the KALU.DEV portfolio website. By accessing the website, you agree to use it responsibly and in accordance with applicable law.',

    sections: [
      {
        title: '1. Purpose of the website',
        paragraphs: [
          'KALU.DEV is a personal portfolio that presents professional information, development interests, skills, and contact options.',
          'Portfolio content is provided for general informational and professional purposes.',
        ],
      },
      {
        title: '2. Acceptable use',
        paragraphs: [
          'You agree not to use this website unlawfully, attempt to compromise its security, interfere with its operation, or use it in a way that may damage the website or affect other visitors.',
          'You must not attempt unauthorized access to hosting systems, administrative interfaces, or other protected resources.',
        ],
      },
      {
        title: '3. Intellectual property',
        paragraphs: [
          'Unless otherwise stated, original text, branding, visual design, and other original materials published on this portfolio belong to Kalu Destiny or are used with appropriate permission.',
          'You may view and share links to publicly available pages. You may not reproduce, republish, or commercially exploit original materials without permission, except where applicable law allows it.',
          'Third-party names, trademarks, libraries, and tools remain the property of their respective owners.',
        ],
      },
      {
        title: '4. Portfolio projects',
        paragraphs: [
          'Project descriptions and examples are provided to demonstrate work, skills, and interests. Project availability, features, and status may change over time.',
          'Unless explicitly stated otherwise, a portfolio display should not be interpreted as a guarantee that a project is currently available for purchase, download, or commercial use.',
        ],
      },
      {
        title: '5. External links',
        paragraphs: [
          'This website may link to third-party websites and services. Those links are provided for convenience. I do not control or guarantee the accuracy, security, availability, or content of external services.',
          'Accessing a third-party service is subject to its own terms and policies.',
        ],
      },
      {
        title: '6. No guarantee of availability',
        paragraphs: [
          'The website is provided on an as-available basis. I may modify, suspend, or remove parts of the website at any time.',
          'I do not guarantee uninterrupted access, error-free operation, or that every item of information will always be current.',
        ],
      },
      {
        title: '7. Limitation of liability',
        paragraphs: [
          'To the extent permitted by applicable law, Kalu Destiny is not responsible for indirect or consequential losses arising from your use of, or inability to use, this portfolio website.',
          'Nothing in these terms excludes or limits liability where doing so would be unlawful.',
        ],
      },
      {
        title: '8. Privacy',
        paragraphs: [
          'Your use of this website is also subject to the Privacy Policy, which explains the website’s approach to personal information and technical data.',
        ],
      },
      {
        title: '9. Changes to these terms',
        paragraphs: [
          'These terms may be updated as the website evolves. Changes will be published on this page with a revised date where appropriate.',
        ],
      },
      {
        title: '10. Applicable law',
        paragraphs: [
          'These terms are intended to operate subject to applicable laws and regulations, including those that may apply in Nigeria and the country from which a visitor accesses the website.',
          'Nothing in these terms removes any rights that cannot lawfully be excluded.',
        ],
      },
      {
        title: '11. Contact',
        paragraphs: [
          'Questions about these terms can be sent to kaludestiny194@gmail.com.',
        ],
      },
    ],
  },

  '/disclaimer': {
    number: '03',
    title: 'Disclaimer',
    updated: '20 October 2026',
    intro:
      'The information on KALU.DEV is provided for general informational and professional portfolio purposes.',

    sections: [
      {
        title: '1. General information',
        paragraphs: [
          'Reasonable care is taken when preparing website content. However, information may become outdated, incomplete, or inaccurate as projects, tools, and technologies change.',
          'Content on this website should not be treated as a guarantee of a particular outcome.',
        ],
      },
      {
        title: '2. Development and design services',
        paragraphs: [
          'Descriptions of development skills, design interests, and portfolio projects illustrate professional experience and interests. They do not, by themselves, create a contract or guarantee a specific result.',
          'Any professional engagement should be confirmed separately, including its scope, timeline, deliverables, fees, and relevant terms.',
        ],
      },
      {
        title: '3. External websites and tools',
        paragraphs: [
          'References to external platforms, software, libraries, or services are provided for convenience or context. Their inclusion does not necessarily imply endorsement.',
          'Third-party products and services remain under the control of their respective providers.',
        ],
      },
      {
        title: '4. Availability and performance',
        paragraphs: [
          'Website availability, performance, and functionality may vary because of hosting, network conditions, browser compatibility, or third-party services.',
          'No guarantee is made that the website will always be accessible without interruption or error.',
        ],
      },
      {
        title: '5. Limitation',
        paragraphs: [
          'To the extent permitted by applicable law, use of information on this website is at your own discretion and risk. Nothing in this disclaimer excludes liability that cannot legally be excluded.',
        ],
      },
      {
        title: '6. Contact',
        paragraphs: [
          'For questions about this disclaimer, contact kaludestiny194@gmail.com.',
        ],
      },
    ],
  },

  '/cookie-policy': {
    number: '04',
    title: 'Cookie Policy',
    updated: '20 October 2026',
    intro:
      'This page explains how cookies and similar technologies may relate to the KALU.DEV website. The policy must reflect the technologies actually enabled on the live website.',

    sections: [
      {
        title: '1. What cookies are',
        paragraphs: [
          'Cookies are small files that a website or service may store in your browser. Similar technologies may store or access information on your device for functionality, security, analytics, or advertising.',
        ],
      },
      {
        title: '2. Technologies used by this website',
        paragraphs: [
          'This portfolio is not intentionally configured to offer advertising or behavioural tracking as a visitor feature. However, the hosting provider, security infrastructure, or embedded third-party services may use technical technologies depending on the deployed configuration.',
          'This statement is not a technical audit and does not guarantee that the live website sets no cookies. The deployed website should be checked in a browser to confirm which cookies and storage mechanisms are actually used.',
        ],
      },
      {
        title: '3. Essential technologies',
        paragraphs: [
          'Some technologies may be necessary for security, network delivery, or basic operation. Where such technologies are used, their purpose depends on the relevant service and configuration.',
        ],
      },
      {
        title: '4. Third-party services',
        paragraphs: [
          'Links to services such as GitHub and WhatsApp may take you away from this website. Those services may use their own cookies and similar technologies under their respective policies.',
          'A link alone does not mean that the third-party service is embedded in or actively tracking this website.',
        ],
      },
      {
        title: '5. Managing cookies',
        paragraphs: [
          'Most modern browsers provide controls for viewing, blocking, and deleting cookies. Blocking certain cookies may affect the functionality of websites you visit.',
          'Browser settings do not necessarily control every type of local storage or technology used by websites.',
        ],
      },
      {
        title: '6. Policy updates',
        paragraphs: [
          'This policy should be reviewed whenever analytics, advertising, embedded media, or other technologies are introduced or changed.',
        ],
      },
      {
        title: '7. Contact',
        paragraphs: [
          'Questions about this Cookie Policy can be sent to kaludestiny194@gmail.com.',
        ],
      },
    ],
  },

  '/accessibility': {
    number: '05',
    title: 'Accessibility Statement',
    updated: '20 October 2026',
    intro:
      'KALU.DEV aims to provide a website that is clear, usable, and accessible to as many people as possible across different devices and browsing methods.',

    sections: [
      {
        title: '1. Our commitment',
        paragraphs: [
          'The goal is to make the portfolio usable on mobile phones, tablets, and desktop computers, with readable text, understandable navigation, and clear interactive elements.',
          'Accessibility is an ongoing effort. Publishing this statement does not mean that every page or component has been independently audited or confirmed to meet a particular standard.',
        ],
      },
      {
        title: '2. Accessibility considerations',
        paragraphs: [
          'Development efforts may include responsive layouts, sufficient text contrast, meaningful link text, semantic HTML, keyboard-friendly interactions, and support for reduced-motion preferences where practical.',
          'Actual accessibility depends on the implementation and should be tested with assistive technologies and automated or manual evaluation.',
        ],
      },
      {
        title: '3. Known limitations',
        paragraphs: [
          'Some parts of the website may not yet provide an ideal experience for every user or assistive technology. Accessibility improvements may be made as issues are identified.',
        ],
      },
      {
        title: '4. Feedback and assistance',
        paragraphs: [
          'If you encounter a barrier while using this website, please describe the page and the issue so it can be reviewed.',
          'Email: kaludestiny194@gmail.com',
          'WhatsApp: +234 815 611 6975',
        ],
      },
      {
        title: '5. Updates',
        paragraphs: [
          'This statement may be updated as the website is reviewed and improvements are introduced.',
        ],
      },
    ],
  },
};

function LegalPage() {
  const location = useLocation();
  const page = legalContent[location.pathname.replace(/\/$/, '')];

  if (!page) {
    return (
      <main className="legal-page">
        <div className="legal-container legal-not-found">
          <span className="legal-eyebrow">404 / NOT FOUND</span>
          <h1>This page doesn't exist.</h1>
          <p>The page you are looking for may have moved or may not be available.</p>
          <Link to="/" className="legal-back-link">
            Return home <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="legal-page">
      <div className="legal-container">

        <div className="legal-topline">
          <Link to="/" className="legal-brand">
            kalu<span>.dev</span>
          </Link>

          <span className="legal-page-number">
            LEGAL / {page.number}
          </span>
        </div>

        <header className="legal-header">
          <span className="legal-eyebrow">
            KALU.DEV / WEBSITE INFORMATION
          </span>

          <h1>{page.title}</h1>

          <p className="legal-intro">{page.intro}</p>

          <div className="legal-updated">
            <span className="legal-updated-dot"></span>
            Last updated: {page.updated}
          </div>
        </header>

        <div className="legal-content">
          {page.sections.map((section, index) => (
            <section className="legal-section" key={section.title}>
              <span className="legal-section-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="legal-section-body">
                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="legal-contact-card">
          <div>
            <span className="legal-eyebrow">NEED MORE INFORMATION?</span>
            <h2>Let's talk.</h2>
            <p>Get in touch if you have questions about this page.</p>
          </div>

          <a href="wa.me/2348156116975" className="legal-contact-link">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="legal-bottom">
          <Link to="/">← Back to KALU.DEV</Link>

          <span>
            © {new Date().getFullYear()} KALU.DEV
          </span>
        </div>

      </div>
    </main>
  );
}

export default LegalPage;
