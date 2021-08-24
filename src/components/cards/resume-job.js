/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';

const ResumeJob = ({job}) => {
    let companyLink = job.url ? (<Link path={job.url} label={job.company} external={true} />) : job.company;
    return (<Box sx={styles.job}>
        <Text as="p"><strong>{companyLink}</strong> | <em>{job.role}</em> | {job.dates}</Text>
    </Box>)
}

export default ResumeJob;

const styles = {
    job: {
      pt: [5],
      pl: [3]
    }
};