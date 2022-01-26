/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import Widget from 'components/widget';
import Image from 'components/image';
import contentImage from 'assets/images/wazaby-contact-us2.jpg'

const contactItems = 
[
  {
    path: 'https://www.facebook.com/Wazaby-Tech-101106198312630',
    icon: facebook,
    label: 'Facebook',
    external: true
  },
  {
    path: 'https://twitter.com/wazabytech',
    icon: twitter,
    label: 'Twitter',
    external: true
  },
  {
    path: 'https://github.com/wazaby-tech',
    icon: github,
    label: 'Github',
    external: true
  }
];

const emailItems =
[
  {
    path: 'mailto:inquiries@wazabytech.com',
    icon: null,
    label: 'Inquiries',
    external: true,
    emailIcon: true
  }
]

const ContactUs = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Get In Touch"
        />
        <Box sx={styles.contentWrapper}>
          <Image src={contentImage} />
          <Widget title="Social" items={contactItems} />
          <Widget title="Email" items={emailItems} />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center'],
    gridTemplateColumns: [
      'repeat(3, 1fr)',
    ],
  },
};
