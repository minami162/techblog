import styles from './styles.module.css';


function PageTitle({title,title_en}){
    return(
        <>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.title_en}>{title_en}</h4>
        </>
    );
}

export default PageTitle;