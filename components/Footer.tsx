import NextLink from 'next/link';
import {  EmailIcon, FacebookMessengerIcon, WhatsappIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Shortcuts',
    items: [
      { title: 'Main page', href: '/' },
      { title: 'Tracking', href: '/tracking' },
      { title: 'Our Profile', href: '/profile-perusahaan' },
      { title: 'Our Services', href: '/produk-dan-layanan' },
      { title: 'News', href: '/berita' },
      { title: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Our Service',
    items: [
      { title: 'Sea Freight FCL/LCL', href: '/produk-dan-layanan' },
      { title: 'Trucking And Distribution', href: '/produk-dan-layanan' },
      { title: 'Project Cargo', href: '/produk-dan-layanan' },
      { title: 'Heavy Equipment', href: '/produk-dan-layanan' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'Produk dan layanan', href: '/produk-dan-layanan' },
      { title: 'Tentang perusahaan', href: '/profile-perusahaan' },
      { title: 'Berita', href: '/berita' },
      { title: 'Hubungi Kami', href: '/contact' },
    ],
  }
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem, i) => (
            <FooterList key={i} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.instagram.com/satriamudalogistik" passHref>
                <FacebookMessengerIcon size={50} round={true} />
            </NextLink>
            <NextLink href="mailto:cs@satriamudalogistik.com" passHref>
                <EmailIcon size={50} round={true} />
            </NextLink>
            <NextLink href="https://wa.me/628113333823" passHref>
                <WhatsappIcon size={50} round={true} />
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 SATRIA MUDA LOGISTICS</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem, i) => (
        <ListItem key={i} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        {title}
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  max-width: 70%;
  position: relative;
  left: 15%;
  border-radius: 20px;
  padding-bottom: 4rem;
  color: rgb(var(--text));
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 1200px){
    max-width: 100%;
    left: 0%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: rgb(var(--text));
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--text), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
