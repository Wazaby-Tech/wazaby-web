/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import FounderProfile from 'components/cards/founder-profile';

import avatar1 from 'assets/images/team/mike-profile-pic.jpg';

const founder = {
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
  education: [{
    schoolName: 'California State University of Los Angeles',
    schoolNameShort: 'CSULA',
    degree: 'Master\'s of Science',
    degreeShort: 'MS',
    major: 'Computer Science',
    majorShort: 'CS',
    gradYear: 2016,
    city: 'Los Angeles',
    state: 'CA'
  },
  {
   schoolName: 'College of the Holy Cross',
   schoolNameShort: 'HC',
   degree: 'Bachelor of Arts',
   degreeShort: 'BA',
   major: 'Computer Science',
   majorShort: 'CS',
   gradYear: 2009,
   city: 'Worcester',
   state: 'MA'
  }],
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
};

const OurFounder = () => {
  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Meet the founder"
        />
        <FounderProfile member={founder} />
      </Container>
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
};
