/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import { ImageLink, Link } from 'components/link';
import { rgba } from 'polished';
import { HiOutlineMail } from 'react-icons/hi';

const Widget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon, external, emailIcon }, i) => {
          return (          
            <li key={i}>
              {emailIcon &&  <Link path={path} label={label} external={external} variant="footer"><HiOutlineMail size='18px' /></Link>}
              {icon && <ImageLink path={path} label={label || path} external={external} imgSrc={icon} />}
              {label && <Link path={path} label={label} external={external} variant="footer" />}
            </li>
            );
          })}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        color: rgba('#02073E', 0.8),
      },
    },
  },
};
