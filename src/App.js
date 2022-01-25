import './App.css';
import NavigationBar from './components/NavigationBar';
import useLocalStorage from 'use-local-storage'
import {useCallback} from 'react'
import ThemeWatcher from './styles/index'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  })

  return (
    <div className="App">
      <ThemeWatcher theme={theme}/>
      <NavigationBar theme={theme} switchTheme={switchTheme}/>
    </div>
  );
}

export default App;
