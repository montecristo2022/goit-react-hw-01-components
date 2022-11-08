import styled from "styled-components";

export const FriendsImg = styled.img`
height: 50px;
`

export const FriendsStatus = styled.span`
 background-color: ${props =>
    props.isOnline ? props.theme.colors.statusGreen : props.theme.colors.statusRed};
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