import LatestNews from '../../components/LatestNews/LatestNews';
import styles from './styles.module.css';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
import React from 'react';


const Main = () => {
    
    return (
        <main className={styles.main}>
            {/* последние новости */}
             <LatestNews/>
            {/* новости с поиском и фильтрами */}
            <NewsByFilters/>
        </main>
        
    );
}

export default Main;
