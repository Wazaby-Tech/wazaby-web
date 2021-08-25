/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';

const ResumeJob = ({job}) => {
    //let companyLink = job.url ? (<Link path={job.url} label={job.company} external={true} />) : job.company;
    let companyLink = job.company;
    let jobDuties = (job.duties && <Text as="blockquote">{job.duties}</Text>);
    return (<Box sx={styles.job}>
        <Text as="p"><strong>{companyLink}</strong> | <em>{job.role}</em> | {job.dates}</Text>
        {jobDuties}
    </Box>)
}

export default ResumeJob;

const styles = {
    job: {
      pt: [3],
      pl: [3]
    }
};