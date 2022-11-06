import PropTypes from 'prop-types';
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

Statistics.propTypes = {

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};