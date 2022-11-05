import { FriendsImg, FriendsWrapper, FriendsStatus, FriendsNameText, OneFriendContainer } from './friendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsWrapper>
      {friends.map(friend => (
        <OneFriendContainer key={friend.id}>
          <FriendsStatus></FriendsStatus>
          <FriendsNameText>{friend.name}</FriendsNameText>
          <FriendsImg src={friend.avatar} alt="friend"></FriendsImg>
        </OneFriendContainer>
      ))}
    </FriendsWrapper>
  );
};
