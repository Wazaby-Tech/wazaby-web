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
      }
    ],
    industries: [ 'government', 'public safety', 'education', 'entertainment', 'industrial', 'sales' ],
    resume: {
      overview: 'Mike is an experienced software engineer with over 10 years of experience working in various industries providing custom technical solutions. Mike is well versed in Microsoft technologies from .NET Framework and .NET Core to frontend frameworks Javascript and React.',
      jobs: [{
        company: 'AXS',
        role: 'Lead Software Engineer',
        url: 'https://www.solutions.axs.com',
        industry: 'entertainment',
        dates: 'July 2018 - Present',
        spotlight: 'Led a year long enterprise wide technical project to merge 3 region specific codebases into one global codebase. Database schemas on 2 different providers as well as middle tier and desktop applications needed extensive feature flagging to ensure region specific features displayed properly.'
      },
      {
        company: 'ElectroRent',
        role: 'Lead Software Engineer',
        url: 'https://electrorent.com',
        industry: 'industrial',
        dates: 'March 2016 - Present',
        spotlight: 'Led implementation on an internal pricing tool that calculates new rates for assets based on a proprietary algorithm using historical data. Supports a data analytics application that provides insights into revenue and performance of products.'
      },
      {
        company: 'Advantage Sales & Marketing',
        role: 'Senior Software Engineer',
        url: 'https://advantagesolutions.net',
        industry: 'sales',
        dates: 'January 2017 - July 2018',
        spotlight: 'Worked on a next generation product that schedules food sampling in grocery stores across several nationwide retailers. Led design and implmentation on a resource management functionality that helps users manage their carts and sampling stations directly within the application to alleviate support requests.'
      },
      {
        company: 'NC4',
        role: 'Senior Software Engineer',
        industry: 'public safety',
        dates: 'July 2013 - February 2016',
        spotlight: 'Worked on a product used by police officers that streamlined the data gathering process. All data feeds were fed into the software allowing connections to be made instaneously across department\'s jurisdiction.'
      },
      {
        company: 'Booz Allen Hamilton',
        role: 'Software Engineer',
        industry: 'government',
        dates: 'June 2009 - July 2013',
        spotlight: 'Led the project\'s technical migration from SharePoint 2010 to SharePoint 2013'
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
          ml: [ 0, containerOffset?.left, null, null ],
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
