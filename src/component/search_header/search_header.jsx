import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onsearch}) => {
  const inputref = useRef();
  const searchhandle = () => {
    const value = inputref.current.value
    onsearch(value);
  }
  const onkeypress = (event) => {
    if(event.key === 'Enter'){
      searchhandle();
    } 
  }
  const onclick = () => {
    searchhandle();
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputref}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onkeypress}
      />
      <button className={styles.button} type="submit" onClick={onclick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
