import styled from "styled-components"

export const HeadingText = styled.h2`
color: ${props => props.theme.colors.mainTextColor};
font-weight: ${props => props.theme.fontWeights.bold};
font-size: ${props => props.theme.fontSizes.l};
margin-top: 20px;
margin-left: 50px;

`


export const StatisticsWrapper = styled.ul`
background-color: ${props => props.theme.colors.brownBcg};
height: 600px;
width: 250px
`

export const StatisticsTextSpan = styled.span`
font-size: ${props => props.theme.fontSizes.s}
`

export const OneFriendContainer = styled.li`
margin-left: 50px;
`

