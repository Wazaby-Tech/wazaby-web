import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import WhoWeAre from 'sections/who-we-are';
import ContactUs from 'sections/contact-us';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Wazaby Tech"
          description="Wazaby Tech LLC | Delivering technology that works for you"
        />
        <Banner />
        <Services />
        <WhoWeAre />
        <ContactUs />
      </Layout>
    </ThemeProvider>
  );
}
