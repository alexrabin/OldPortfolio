import './App.css';
import useLocalStorage from 'use-local-storage'
import {useCallback, useMemo, useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import AboutSection from './components/AboutSection';
import NavigationBar from './components/NavigationBar';
import HeaderSection from './components/HeaderSection';
import ParticlesBg from 'particles-bg'
import Experience from './components/ExperienceSection';

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

  const [height, setHeight] = useState(window.document.body.scrollHeight);
  
  useEffect(() => {
    const handleResize = (e) => {

      setHeight(window.document.body.scrollHeight)
      
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    // cleanup this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    
    <div className={`vh-100`} style={{transition: "all .5s ease",
  WebkitTransition: "all .5s ease",
  MozTransition: "all .5s ease"}}>
    <ParticlesBg id="tsparticles" type="cobweb" color={'#EC4578'} bg={{
        position: 'absolute',
        width:' 100%',
        height: height,
        pointerEvents: 'none',
        zIndex: -1,
        display:'block',
        top: 0,
        left: 0,
        backgroundColor: styles.particleBgColor,
        filter: 'blur(2px)',
        transform: 'scale(1.01)' 
      }} />
       <div > 
      <NavigationBar theme={theme} switchTheme={switchTheme} styles={styles}/>
      <Container style={{zIndex: 1020, paddingBottom:50}}>
          <HeaderSection theme={theme} styles={styles}/>
          <AboutSection theme={theme} styles={styles}/>
          <Experience theme={theme} styles={styles}/>
      </Container>
      </div>
    </div>
  );
}

export default App;
