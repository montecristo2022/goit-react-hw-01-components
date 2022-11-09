import PropTypes from 'prop-types';
import {
  FriendsImg,
  FriendsStatus,
  FriendsNameText,
  OneFriendContainer,
} from './friendLitsItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline}) => {
  return (
    <OneFriendContainer>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>

      <FriendsNameText>{name}</FriendsNameText>
      <FriendsImg src={avatar} alt="friend"></FriendsImg>
    </OneFriendContainer>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,

};
