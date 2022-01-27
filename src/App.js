import './App.css';
import useLocalStorage from 'use-local-storage'
import {useCallback, useMemo} from 'react'
import { Container } from 'react-bootstrap';
import AboutSection from './components/AboutSection';
import NavigationBar from './components/NavigationBar';
import Particles from "react-tsparticles";
import HeaderSection from './components/HeaderSection';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const styles = useMemo(() => {
    const isDark = theme === "dark";
    return {
      textColor: isDark ? 'text-light' : 'text-dark',
      accentTextColor: isDark ? '#DCDDDE' : '#49525C',
      bgColor: isDark ? 'bg-dark' : 'bg-light',
      accentColor: isDark ? '#49525B' : '#E5E6E7',
      smallLinkStyle: ` small-text ${isDark ? 'dark-nav-link' : 'light-nav-link'}`,
      medLinkStyle: `med-text mono-font ${isDark ? 'dark-nav-link' : 'light-nav-link'}`,
      particleBgColor: isDark ? '#212529' : '#F4F7FA'


    }
  }, [theme]);

  const switchTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
  
    setTheme(newTheme);


  },[theme, setTheme])


  return (
    
    <div className={`vh-100`} style={{transition: "all .5s ease",
  WebkitTransition: "all .5s ease",
  MozTransition: "all .5s ease"}}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: styles.particleBgColor,
            },
          },
          fpsLimit: 30,
          fullScreen: {enabled: true},
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.6,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: styles.accentColor,
            },
            links: {
              color: styles.accentTextColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />
       <div > 
      <NavigationBar theme={theme} switchTheme={switchTheme} styles={styles}/>
      <Container style={{zIndex: 1020}}>
        <HeaderSection theme={theme} styles={styles}/>
        <AboutSection theme={theme} styles={styles}/>
      </Container>
      </div>
    </div>
  );
}

export default App;
