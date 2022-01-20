/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          <Text as="p" sx={styles.copyright}>
            &copy; {new Date().getFullYear()} Wazaby Tech LLC | All Rights Reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
  },
};
