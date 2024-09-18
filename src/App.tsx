import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { useTheme } from './context/ThemeContext'
import { useAppSelector } from './store';


function App() {

 const {isDark} = useTheme();
 const news = useAppSelector(state => state.news)        //для проверки
 console.log(news)                                        //для проверки
//  console.log("App", {isDark})
  return (
       <div className={`app ${isDark ? 'dark' : 'light'}`}>
          <Header />
        <div className='container'>
          <Main />
        </div>
      </div>
  )
}

export default App
