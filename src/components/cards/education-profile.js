/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';

const EducationProfile = ({school}) => {
    let cityState = `${school.city}, ${school.state}`;
    return (<Box sx={styles.school}>
        <Text as="p"><strong>{school.schoolName}</strong></Text>
        <Text as="p">{cityState}</Text>
        <Text as="p">{school.gradYear} | <em>{school.degree}</em></Text>
        <Text as="p">Major: <em>{school.major}</em></Text>
    </Box>)
}

export default EducationProfile;

const styles = {
    school: {
      pt: [3],
      pl: [3]
    }
};