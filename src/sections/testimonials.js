/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';

const industries = [
  'Government',
  'Public Safety',
  'Education',
  'Entertainment',
  'Industrial',
  'Sales',
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Industries we've delivered in"
        />
        <Box sx={styles.chipRow}>
          {industries.map((industry) => (
            <Box key={industry} sx={styles.chip}>
              {industry}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  heading: {
    mb: [6, null, null, 7],
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    maxWidth: 720,
    margin: '0 auto',
  },
  chip: {
    fontFamily: 'body',
    fontWeight: 500,
    fontSize: [1, null, null, 2],
    color: 'heading',
    backgroundColor: rgba('#B2D2A4', 0.35),
    borderRadius: '30px',
    padding: '10px 22px',
  },
};
