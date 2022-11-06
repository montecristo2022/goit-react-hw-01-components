import { FriendsImg, FriendsWrapper, FriendsStatus, FriendsNameText, OneFriendContainer } from './friendList.styled';
import styles from './friends.module.css'

export const FriendsList = ({ friends }) => {
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <OneFriendContainer key={friend.id}>



{/* КАК СДЕЛАТЬ БЕЗ КЛАССНЕЙМ? */}
{/* className={friend.isOnline ? styles.statisticStatusGreen : styles.statisticStatusRed} */}
          <FriendsStatus isOnline={friend.isOnline}></FriendsStatus>





          <FriendsNameText>{friend.name}</FriendsNameText>
          <FriendsImg src={friend.avatar} alt="friend"></FriendsImg>
        </OneFriendContainer>
      ))}
    </FriendsWrapper>
  );
};
