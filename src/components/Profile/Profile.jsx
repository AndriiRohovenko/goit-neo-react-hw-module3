import styles from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <>
      <div className={styles.profileCard}>
        <img className={styles.profileImg} src={image} alt="default alt" />
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.UserLocation}>{location}</p>
        <ul className={styles.UserStats}>
          <li className={styles.stat}>
            <span>Followers</span>
            <strong>
              <span>{stats.followers}</span>
            </strong>
          </li>
          <li className={styles.stat}>
            <span>Views</span>
            <strong>
              <span>{stats.views}</span>
            </strong>
          </li>
          <li className={styles.stat}>
            <span>Likes</span>
            <strong>
              <span>{stats.likes}</span>
            </strong>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
