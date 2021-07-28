import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import OurTeam from 'sections/our-team';
import WhyUs from 'sections/why-us';

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
        <OurTeam />
        <WhyUs />
      </Layout>
    </ThemeProvider>
  );
}
