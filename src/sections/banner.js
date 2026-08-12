/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Heading, Text, Image } from 'theme-ui';
import { rgba } from 'polished';
import { scroller } from 'react-scroll';
import illustration from 'assets/images/wazaby-banner.jpg';

const scrollToContact = () => {
  scroller.scrollTo('contact', {
    smooth: true,
    duration: 500,
    offset: -70,
  });
};

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.heading}>
            <Heading as="h1">
              We deliver technical expertise to optimize your digital business.
            </Heading>
            <Text as="p">
              Wazaby Tech Consulting is a valuable and effective partner on the
              road to achieve the next level of technical maturity.
            </Text>
          </Box>
          <Box sx={styles.buttonWrapper}>
            <Button variant="primary" onClick={scrollToContact}>
              Start a conversation
            </Button>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={illustration} alt="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    textAlign: 'center',
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h1: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
      letterSpacing: '-0.5px',
    },
    p: {
      color: 'text',
      mt: [3],
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['100%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: 'center',
    mb: [8, null, null, 9],
  },
};
