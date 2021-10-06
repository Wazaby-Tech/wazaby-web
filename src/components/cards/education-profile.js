/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';

const EducationProfile = ({school}) => {
    let cityState = `${school.city}, ${school.state}`;
    return (<Box sx={styles.school}>
        <Text as="p"><strong>{school.schoolNameShort}</strong> | {school.gradYear} | <em>{school.degreeShort}</em></Text>
        <Text as="p">Major: <em>{school.majorShort}</em></Text>
        <Text as="p">{cityState}</Text>
    </Box>)
}

export default EducationProfile;

const styles = {
    school: {
      pt: [3],
      pl: [3]
    }
};