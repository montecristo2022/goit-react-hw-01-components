import React from "react";




import user from '../dataJSON/user.json';
import data from '../dataJSON/data.json';
import friends from '../dataJSON/friends.json';
import transactions from '../dataJSON/transactions.json';


import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendsList } from "./FriendsList/friendsList";
import { TransactionsList } from "./Transations/transactionsList";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >


<Profile
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />

<Statistics  stats={data}/>
<FriendsList friends={friends}/>
<TransactionsList items={transactions}/>

    </div>

  );
};
