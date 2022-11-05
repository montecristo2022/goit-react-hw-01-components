import { MainText, ProfileWrapper, ProfileImg, ProfileTextSpan, ProfileTextP, ProfileStatsContainer } from "./profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <div>
        <ProfileImg src={avatar} alt="Profile Avatar" />
        <MainText> {username}</MainText>
        <ProfileTextP>@{tag}</ProfileTextP>
        <ProfileTextP>{location}</ProfileTextP>
      </div>

      <ProfileStatsContainer>
        <li>
          <ProfileTextSpan>Followers: </ProfileTextSpan>
          <ProfileTextSpan>{stats.followers}</ProfileTextSpan>
        </li>
        <li>
          <ProfileTextSpan>Views: </ProfileTextSpan>
          <ProfileTextSpan>{stats.views}</ProfileTextSpan>
        </li>
        <li>
          <ProfileTextSpan>Likes: </ProfileTextSpan>
          <ProfileTextSpan>{stats.likes}</ProfileTextSpan>
        </li>
      </ProfileStatsContainer>
    </ProfileWrapper>
  );
};
