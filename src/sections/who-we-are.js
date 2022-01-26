/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/team/mike-profile-pic.jpg';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const data = {
  quote: 'We deliver technical expertise to optimize your digital business needs.',
  para: 'Organizations looking to stay ahead of the curve often can\'t do it alone. However, the digital infrastructure landscape is constantly changing. We strive to enable organizations to take the next leap in their digital transformation whether it\'s the first or the next in a series of many. Wazaby Tech Consulting is a valuable and effective partner on the road to achieve the next level of technical maturity.'
};

const WhoWeAre = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <SectionHeading
        sx={styles.heading}
        title="Who We Are"
      />
      {data.quote && <Box sx={styles.quote} as="blockquote">
        {data.quote}
      </Box>}
      {data.para && <Box sx={styles.teamWrapper} as="p">
        {data.para}
      </Box>}
    </Box>
  );
};

export default WhoWeAre;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
    backgroundColor: 'primary'
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  quote: {
    position: 'relative',
    textAlign: 'center',
    m: '10px auto 0',
    fontSize: ['30px'],
    
    pl: [6],
    pr: [6, null, null, 0]
  },
  teamWrapper: {
    position: 'relative',
    textAlign: 'center',
    m: '10px auto 0',
    pl: [6],
    pr: [6, null, null, 0],
  },
};
