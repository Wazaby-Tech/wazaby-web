/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';

const ResumeJob = ({job}) => {
    return (<Box sx={styles.job}>
        <Heading as="h5">{job.company} | {job.dates}</Heading>
    </Box>)
}

export default ResumeJob;

const styles = {
    job: {
      pt: [5],
      pl: [3]
    }
};