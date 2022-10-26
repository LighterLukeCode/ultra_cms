import styles from "./header.module.scss";
import logo from "./../../assets/icons/logo.svg";
import ic_user from "./../../assets/icons/ic_person.svg";

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.header_logo}>
          <img src={logo} alt="logo" />
          <p className={styles.title}>Wrench CRM</p>
        </div>
        <div className={styles.header_user}>
          <img src={ic_user} alt="icon person" />
          <p className={styles.user_name}>Имя Фамилия</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
