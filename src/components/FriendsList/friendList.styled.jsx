import styled from "styled-components";

export const FriendsImg = styled.img`
height: 50px;
`

export const FriendsWrapper = styled.ul`
background-color: ${props => props.theme.colors.darkkhaki};
height: 600px;
width: 250px
`

export const FriendsStatus = styled.span`
background-color: ${p =>
    p.isOnline ? p.theme.colors.statusGreen : p.theme.colors.statusRed};
border-radius: ${props => props.theme.radii.circle};
display: block;
height: 16px;
width: 16px;

`


export const FriendsNameText = styled.span`
font-size: ${props => props.theme.fontSizes.s}
`

export const OneFriendContainer = styled.li`
margin-left: 30%;
margin-top: 20px;

`


