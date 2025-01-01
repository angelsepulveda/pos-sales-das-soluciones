'use client';

import styled, { ThemeProvider } from 'styled-components';
import { ReactNode, useState } from 'react';
import { device } from '@/styles';
import { Sidebar } from '../organisms';
import { useThemeStore } from '@/store';

type TMainPrivateLayoutProps = {
  children: ReactNode;
};

export const MainPrivateLayout = ({ children }: TMainPrivateLayoutProps) => {
  const [open, setOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <Container>
        <section className="contentSidebar">
          <Sidebar open={open} handleOpen={() => setOpen(!open)} />
        </section>
        <section className="contentMenuMobile">Menu</section>
        <section className="contentApp">{children}</section>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar {
    display: none;
    background-color: blue;
  }
  .contentMenuMobile {
    position: absolute;
    background-color: green;
  }
  .contentApp {
    background-color: red;
    grid-column: 1;
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }
    .contentMenuMobile {
      display: none;
    }
    .contentApp {
      grid-column: 2;
    }
  }
`;
