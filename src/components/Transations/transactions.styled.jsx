
import styled from "styled-components";


export const TransactionsHeadingText = styled.th`
color: ${props => props.theme.colors.mainTextColor};
font-weight: ${props => props.theme.fontWeights.bold};
font-size: ${props => props.theme.fontSizes.l}

`

export const TransactionWrapper = styled.table`
background-color: ${props => props.theme.colors.greyBcg};
height: 600px;
width: 500px
`

export const TransactionTextTd = styled.td`
font-size: ${props => props.theme.fontSizes.s}
`
