/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Text, Heading, Button } from 'theme-ui';
import { LearnMore } from 'components/link';

const Service = ({ item }) => {
  return (
    <Box sx={styles.serviceItem}>
      {item?.icon && <Box as="figure" sx={styles.figure}>
        <Image src={item?.icon} alt="icon" />
      </Box>}
      <Box sx={styles.content}>
        <Heading as="h3">{item?.title}</Heading>
        {item?.description && <Text as="p">{item?.description}</Text>}
        {item?.moreLink && <LearnMore path={item?.moreLink} />}
      </Box>
    </Box>
  );
};

export default Service;

const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    backgroundColor: 'primary',
    color: 'text',
    padding: ['5px', '7px', '10px', '15px', '17px', '20px'],
    borderRadius: ['5px', '7px', '10px', null, '13px', '15px'],
    height: ['100px', null, '150px', null, null, '200px']
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%'],
    },
  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 3],
      lineHeight: [1.68],
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
