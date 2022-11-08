import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

import { FriendsWrapper } from './friendList.styled';
// import styles from './friends.module.css'

export const FriendsList = ({ friends }) => {
  return (
    <FriendsWrapper>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsWrapper>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
