import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.FriendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
