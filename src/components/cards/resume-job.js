/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';

const ResumeJob = ({job}) => {
    //let companyLink = job.url ? (<Link path={job.url} label={job.company} external={true} />) : job.company;
    let companyLink = job.company;
    let spotlight = (job.spotlight && <Text as="blockquote" sx={styles.spotlight}>{job.spotlight}</Text>);
    return (<Box sx={styles.job}>
        <Text as="p"><strong>{companyLink}</strong> | <em>{job.role}</em></Text>
        <Text as="p">{job.dates}</Text>
        {spotlight}
    </Box>)
}

export default ResumeJob;

const styles = {
    job: {
      pt: [3],
      pl: [3]
    },
    spotlight: {
        pt: [3],
        display: ['none', null, null, null, 'inline-block']
    },
    industry: {
        display: ['none', null, null, null, 'inline-block']
    }
};