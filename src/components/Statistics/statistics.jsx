import PropTypes from 'prop-types';
import { HeadingText, StatisticsWrapper, StatisticsTextSpan, OneFriendContainer } from "./statistics.styled";

export const Statistics = ({title, stats }) => {
  return (
    <StatisticsWrapper>
      
      {title && <HeadingText>{title}</HeadingText>}
      {stats.map(({id, label, percentage}) => (
        <OneFriendContainer key={id}>
          <StatisticsTextSpan>{label}</StatisticsTextSpan>
          <StatisticsTextSpan> {percentage}%</StatisticsTextSpan>
        </OneFriendContainer>
      ))}
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};