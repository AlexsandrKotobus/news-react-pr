import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcon } from '@/shared/assets';
// import styles from './styles.module.css';

const ThemeButton = () => {
    const {isDark, toggleTheme} = useTheme()
    return (
        <img src={isDark ? themeIcon.light : themeIcon.light} 
          width={30} alt='theme' onClick = {toggleTheme}  />
    );
}

export default ThemeButton;
