import styled, { useTheme } from 'styled-components';
import { ToggleTheme } from '@/components/organisms/ToggleTheme';
import { v } from '@/styles';
import { LinksArray, SecondarylinksArray } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import logoLight from '../../../assets/Isotipo.png';
import logoDark from '../../../assets/IsotipoBlanco.png';
import Image from 'next/image';

type TSidebarProps = {
  open: boolean;
  handleOpen: () => void;
};

type TStyledProps = {
  $isopen: string;
};

export const Sidebar = ({ open, handleOpen }: TSidebarProps) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const logo = theme === 'dark' ? logoDark : logoLight;

  return (
    <Main $isopen={open.toString()}>
      <span className="Sidebarbutton" onClick={() => handleOpen()}>
        {<v.iconoflechaderecha />}
      </span>
      <Container $isopen={open.toString()} className={open ? 'active' : ''}>
        <div className="Logocontent">
          <div className="imgcontent">
            <Image
              src={logo}
              alt="Logo"
              className="logo-img"
              width={50} // Especifica el tamaño de la imagen
              height={50} // Especifica el tamaño de la imagen
            />
          </div>
          <h2>DAS Soluciones</h2>
        </div>
        {LinksArray.map(({ icon, label, to }) => {
          const isActive = pathname === to;
          return (
            <div
              className={isActive ? 'LinkContainer active' : 'LinkContainer'}
              key={label}
            >
              <Link href={to} className={`Links${isActive ? ' active' : ''}`}>
                <section className={open ? 'content open' : 'content'}>
                  <Icon className="Linkicon" icon={icon} />
                  <span className={open ? 'label_ver' : 'label_oculto'}>
                    {label}
                  </span>
                </section>
              </Link>
            </div>
          );
        })}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to, color }) => {
          const isActive = pathname === to;
          return (
            <div
              className={open ? 'LinkContainer active' : 'LinkContainer'}
              key={label}
            >
              <Link href={to} className={`Links${isActive ? ' active' : ''}`}>
                <section className={open ? 'content open' : 'content'}>
                  <Icon color={color} className="Linkicon" icon={icon} />
                  <span className={open ? 'label_ver' : 'label_oculto'}>
                    {label}
                  </span>
                </section>
              </Link>
            </div>
          );
        })}
        <div className={open ? 'LinkContainer active' : 'LinkContainer'}>
          <div className="Links" onClick={() => {}}>
            <section className={open ? 'content open' : 'content'}>
              <Icon
                color="#CE82FF"
                className="Linkicon"
                icon="heroicons:ellipsis-horizontal-circle-solid"
              />
              <span className={open ? 'label_ver' : 'label_oculto'}>MÁS</span>
            </section>
          </div>
        </div>

        <ToggleTheme />
      </Container>
    </Main>
  );
};

const Container = styled.div<TStyledProps>`
  background: ${({ theme }) => theme.bgtotal};
  color: ${props => props.theme.text};
  position: fixed;
  padding-top: 20px;
  z-index: 2;
  height: 100%;
  width: 88px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 2px solid ${({ theme }) => theme.color2};

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 260px;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isopen }) =>
          $isopen === 'true' ? `scale(0.7)` : `scale(1.0)`}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      color: ${({ theme, $isopen }) =>
        $isopen === 'true' ? theme.color3 : 'transparent'};
      font-size: 22px;
      display: ${({ $isopen }) => ($isopen === 'true' ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 9px 0;
    margin-right: 10px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
  }

  .Links {
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    color: ${props => props.theme.text};
    height: 60px;
    position: relative;
    .content {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      .Linkicon {
        display: flex;
        font-size: 33px;

        svg {
          font-size: 25px;
        }
      }

      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
        display: initial;
      }
      .label_oculto {
        opacity: 0;
        display: none;
      }

      &.open {
        justify-content: start;
        gap: 20px;
        padding: 20px;
      }
    }

    &:hover {
      background: ${props => props.theme.bgAlpha};
    }

    &.active {
      background: ${props => props.theme.bg6};
      border: 2px solid ${props => props.theme.bg5};
      color: ${props => props.theme.color1};
      font-weight: 600;
    }
  }
`;
const Main = styled.div<TStyledProps>`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 68px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${props => props.theme.bgtgderecha};
    box-shadow:
      0 0 4px ${props => props.theme.bg3},
      0 0 7px ${props => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 3;
    transform: ${({ $isopen }) =>
      $isopen === 'true' ? `translateX(173px) rotate(3.142rad)` : `initial`};
    color: ${props => props.theme.text};
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${props => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
