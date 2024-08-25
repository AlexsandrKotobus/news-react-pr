import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { useTheme } from './context/ThemeContext'


function App() {

 const {isDark} = useTheme();
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
