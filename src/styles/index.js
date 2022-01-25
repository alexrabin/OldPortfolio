export default function ThemeWatcher(theme){
    
    if (theme === 'dark'){
        const _ = require('./dark-theme.scss');
    }
    else {
        const _ = require('bootstrap/dist/css/bootstrap.min.css');
    }
    return null;
}