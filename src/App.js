import './App.css';
import NavigationBar from './components/NavigationBar';
import useLocalStorage from 'use-local-storage'
import {useCallback, useMemo} from 'react'
import { Container } from 'react-bootstrap';
import AboutSection from './components/AboutSection';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const styles = useMemo(() => {
    const isDark = theme == "dark";
    return {
      textColor: isDark ? 'text-light' : 'text-dark',
      bgColor: isDark ? 'bg-dark' : 'bg-light',
      accentColor: isDark ? '#49525B' : '#E5E6E7',
      smallLinkStyle: `small-text mono-font ${isDark ? 'text-light' : 'text-primary'}`,
      medLinkStyle: `med-text mono-font ${isDark ? 'text-light' : 'text-primary'}`

    }
  }, [theme]);

  const switchTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  })

  return (
    <div className={`vh-100 ${styles.bgColor}`}>
      <NavigationBar theme={theme} switchTheme={switchTheme} styles={styles}/>
      <Container>
        <AboutSection theme={theme} styles={styles}/>
      </Container>
    </div>
  );
}

export default App;
