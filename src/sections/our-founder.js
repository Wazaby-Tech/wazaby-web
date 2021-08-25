/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import FounderProfile from 'components/cards/founder-profile';

import avatar1 from 'assets/images/team/mike-profile-pic.jpg';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Mike Holloway',
    designation: 'Founder & CEO',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/wazabydev',
      },
      {
        name: 'github',
        link: 'https://github.com/mholloway24',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/michael-holloway-wazaby'
      },
      {
        name: 'twitch',
        link: 'https://twitch.tv/wazabydev'
      }
    ],
    industries: [ 'government', 'public safety', 'education', 'entertainment', 'industrial', 'sales' ],
    resume: {
      overview: 'Mike is an experienced software engineer with over 10 years of experience working in various industries providing custom technical solutions. Mike is well versed in Microsoft technologies and frontend frameworks from .NET Framework and .NET Core to Javascript and React.',
      jobs: [{
        company: 'AXS',
        role: 'Lead Software Engineer',
        url: 'https://www.solutions.axs.com',
        industry: 'entertainment',
        dates: 'July 2018 - Present',
        duties: ''
      },
      {
        company: 'ElectroRent',
        role: 'Lead Software Engineer',
        url: 'https://electrorent.com',
        industry: 'industrial',
        dates: 'March 2016 - Present',
        duties: ''
      },
      {
        company: 'Advantage Sales & Marketing',
        role: 'Senior Software Engineer',
        url: 'https://advantagesolutions.net',
        industry: 'sales',
        dates: 'January 2017 - July 2018',
        duties: ''
      },
      {
        company: 'NC4',
        role: 'Senior Software Engineer',
        industry: 'public safety',
        dates: 'July 2013 - February 2016',
        duties: ''
      },
      {
        company: 'Booz Allen Hamilton',
        role: 'Software Engineer',
        industry: 'government',
        dates: 'June 2009 - July 2013',
        duties: ''
      }]
    }
  }
];

const OurFounder = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet the founder"
          description=""
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={1}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <FounderProfile member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurFounder;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
