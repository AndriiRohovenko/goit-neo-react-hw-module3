import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.FriendListItemWrapper}>
      <img src={avatar} alt="default alt" width="48" />
      <strong>
        <p>{name}</p>
      </strong>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
