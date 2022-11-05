import styled from "styled-components"

// export const Text = styled.p`
// background-color: teal;`


export const MainText = styled.p`
color: ${props => props.theme.colors.mainTextColor};
font-weight: ${props => props.theme.fontWeights.bold};
font-size: ${props => props.theme.fontSizes.m};
margin-left: 50px;
`

export const ProfileWrapper = styled.div`
background-color: ${props => props.theme.colors.greyBcg};
height: 600px;
width: 250px
`


export const ProfileImg = styled.img`
margin-top: 20px;
margin-bottom: 30px;
height: 50px;
margin-left: 40%;
`

export const ProfileTextP = styled.p`
font-size: ${props => props.theme.fontSizes.s};
margin-top: 20px;
margin-left: 50px;
`

export const ProfileTextSpan = styled.span`
font-size: ${props => props.theme.fontSizes.s}
`

export const ProfileStatsContainer = styled.ul`
margin-left: 50px;
`