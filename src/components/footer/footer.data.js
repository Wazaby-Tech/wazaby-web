import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [     
      {
        path: '#!',
        label: 'About Us',
      }
    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [      
      {
        path: '#!',
        label: 'Privacy Policy',
      }
    ],
  },  
  {
    id: 4,
    title: 'Connect',
    items: [
      {
        path: 'https://www.facebook.com/Wazaby-Tech-101106198312630',
        icon: facebook,
        label: 'Facebook',
        external: true
      },
      {
        path: 'https://twitter.com/wazabytech',
        icon: twitter,
        label: 'Twitter',
        external: true
      },
      {
        path: 'https://github.com/wazaby-tech',
        icon: github,
        label: 'Github',
        external: true
      }
    ],
  },
];

export const footerNav = [
  {
    path: '/',
    label: 'Home',
  }
];
