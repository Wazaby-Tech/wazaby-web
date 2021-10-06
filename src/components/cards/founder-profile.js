/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaLinkedin, FaTwitch, FaInstagram } from 'react-icons/fa';
import ResumeJob from './resume-job';
import EducationProfile from './education-profile';

const FounderProfile = ({ member }) => {
  //console.log(member);
  let industries = member?.industries?.map((industry, i) => (<Text as='p' key={i}>{industry}</Text>))
  let resumeJobs = member?.resume?.jobs?.map((job, i) => (<ResumeJob key={i} job={job} />))
  let education = member?.education?.map((school, i) => (<EducationProfile key={i} school={school} />))

  return (
    <Flex sx={styles.section}>
      <Box sx={styles.profile}>
        <Flex as="figure" sx={styles.avatar}>
          <Image src={member?.avatar} alt={member?.name} />
        </Flex>
        <Box sx={styles.about}>
          <Heading as="h3">{member?.name}</Heading>
          <Text as="p">{member?.designation}</Text>
          <Box sx={styles.socialLinks}>
            {member?.socialLinks?.map((social, index) => (
              <Link href={social?.link} key={index}>
                {social?.name === 'twitter' && (
                  <FaTwitter size="18px" color="#55ACEE" />
                )}
                {social?.name === 'github' && (
                  <FaGithub size="18px" color="#161614" />
                )}
                {social?.name === 'linkedin' && (
                  <FaLinkedin size="18px" />
                )}
                {social?.name === 'twitch' && (
                  <FaTwitch size="18px" />
                )}
                {social?.name === 'instagram' && (
                  <FaInstagram size="18px" />
                )}
              </Link>
            ))}
          </Box>
        </Box>
        {education && (<Box sx={styles.education}>
          <Heading as="h4">Education</Heading>
          {education}
          </Box>)}
        {industries && (<Box sx={styles.industries}>
          <Heading as="h4">Industries</Heading>
          {industries}
          </Box>
          )}
      </Box>
      <Box sx={styles.resume}>
        <Heading as="h4">Overview</Heading>
        <Text sx={styles.overview} as="p">{member?.resume?.overview}</Text>
        {resumeJobs && (<Box sx={styles.work}>
            <Heading as="h4">Work Experience</Heading>
            {resumeJobs}
          </Box>)}
      </Box>
    </Flex>
  );
};

export default FounderProfile;

const styles = {
  section: {
    minWidth: ['640px'],
    alignItems: ['start'],
    justifyContent: ['start', null, null, 'center'],
    h4: {
      textTransform: 'uppercase'
    }
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  profile: {
    width: ['40%', null, '30%', null, '20%', null],
    pr: [5],
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
      textAlign: ['left']
    },
  },
  resume: {
    width: ['50%'],
    pl: [5],
    textAlign: ['center', null, null, 'left'],
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
      textAlign: ['left']
    },
    a: {
      color: 'black'
    }
  },
  overview: {
    textAlign: ['left'],
    pl: [5],
    pt: [3]
  },
  education: {
    pt: [5],
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
      textAlign: ['left']
    }
  },
  industries: {
    pt: [5],
    textAlign: ['left'],
    textTransform: 'uppercase',
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
      textAlign: ['left']
    },
    p: {
      pt: [3],
      pl: [3]
    }
  },
  work: {    
    textAlign: ['left'],
    pt: [5]
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
