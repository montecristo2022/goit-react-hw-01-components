import React from 'react';

import user from '../dataJSON/user.json';
import data from '../dataJSON/data.json';
import friends from '../dataJSON/friends.json';
import transactions from '../dataJSON/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionsList } from './Transations/TransactionsList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsList items={transactions} />
    </div>
  );
};
