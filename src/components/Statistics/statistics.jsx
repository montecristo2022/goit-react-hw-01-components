import { HeadingText, StatisticsWrapper, StatisticsTextSpan, OneFriendContainer } from "./statistics.styled";

export const Statistics = ({ stats }) => {
  return (
    <StatisticsWrapper>
      <HeadingText>UPLOAD STATS</HeadingText>
      {stats.map(item => (
        <OneFriendContainer key={item.id}>
          <StatisticsTextSpan>{item.label}</StatisticsTextSpan>
          <StatisticsTextSpan> {item.percentage}%</StatisticsTextSpan>
        </OneFriendContainer>
      ))}
    </StatisticsWrapper>
  );
};
