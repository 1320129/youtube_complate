import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(
  ({onsearch,mode}) => {
    const inputref = useRef();
    const searchhandle = () => {
      const value = inputref.current.value
      onsearch(value);
    }
    const onkeypress = (event) => {
      if(event.key === 'Enter'){
        searchhandle();
        mode(null);
      } 
    }
    const onclick = () => {
      searchhandle();
      mode(null);
    }
    return (
      <header className={styles.header}>
        <div className={styles.logo} onClick={()=>{mode(null)}}>
          <img className={styles.img} src="./images/logo.png" alt="logo" />
          <h1 className={styles.title}>Rantube</h1>
        </div>
        <input
          ref={inputref}
          className={styles.input}
          type="search"
          placeholder="란이 검색"
          onKeyPress={onkeypress}
        />
        <button className={styles.button} type="submit" onClick={onclick}>
          <img
            className={styles.buttonImg}
            src="./images/search.png"
            alt="search"
          />
        </button>
      </header>
    );
  }
);

export default SearchHeader;
