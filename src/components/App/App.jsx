import './App.module.css';

import Profile from '../Profile/Profile';
import userData from '../../mockedData/task1.json';

import FriendList from '../FriendList/FriendList';
import friendsListData from '../../mockedData/task2.json';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import TransactionHostoryData from '../../mockedData/task3.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsListData} />
      <TransactionHistory items={TransactionHostoryData} />
    </>
  );
}

export default App;
