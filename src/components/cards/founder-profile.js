/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaLinkedin, FaTwitch, FaInstagram } from 'react-icons/fa';
import ResumeJob from './resume-job';

const FounderProfile = ({ member }) => {
  console.log(member);
  let industryListItems = member?.industries?.map((industry) => (<li>{industry}</li>))
  let resumeJobs = member?.resume?.jobs?.map((job) => (<ResumeJob job={job} />))

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
      </Box>
      <Box sx={styles.resume}>
        <Heading as="h4">Overview</Heading>
        <Text as="p">{member?.resume?.overview}</Text>
        {industryListItems && (<Box sx={styles.industries}>
          <Heading as="h4">Industries</Heading>
          <ul>{industryListItems}</ul>
          </Box>
          )}
        {resumeJobs && (<Box>
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
    alignItems: 'start',
    justifyContent: 'center'
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
    width: ['30%'],
    pr: [10]
  },
  resume: {
    width: ['45%'],
    pl: [5],
    textAlign: ['center', null, null, 'left'],
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    }
  },
  industries: {
    pt: [5],
    textAlign: ['left']
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
