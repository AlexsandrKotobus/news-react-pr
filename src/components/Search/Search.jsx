import styles from './styles.module.css'

const Search = ({keyworsd, setKeywords}) => {
    return (
        <div className={styles.search}>
          <input 
            type='text' 
            value={keyworsd} 
            className={styles.input} 
            onChange={(e)=> setKeywords(e.target.value)}
            placeholder="JavaScript"/>
           
        </div>
    );
    
}

export default Search;
