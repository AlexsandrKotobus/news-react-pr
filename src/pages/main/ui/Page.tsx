import LatestNews from './LatestNews/LatestNews';
import styles from './styles.module.css';
import NewsByFilters from './NewsByFilters/NewsByFilters';

const MainPage = () => {
    return (
        <main className={styles.main}>
            {/* последние новости */}
             <LatestNews/>
            {/* новости с поиском и фильтрами */}
            <NewsByFilters/>
        </main>
        
    );
}

export default MainPage;
