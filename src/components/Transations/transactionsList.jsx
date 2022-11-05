import { TransactionsHeadingText, TransactionWrapper, TransactionTextTd } from "./transactions.styled"

export const TransactionsList = ({items}) => {


    return <TransactionWrapper>
    <thead>
    <tr>
      <TransactionsHeadingText >Type</TransactionsHeadingText>
      <TransactionsHeadingText >Amount</TransactionsHeadingText>
      <TransactionsHeadingText >Currency</TransactionsHeadingText>
    </tr>
  </thead>

  <tbody>
    {items.map(({ type, amount, currency, id }) => (
      <tr key={id}>
        <TransactionTextTd >{type}</TransactionTextTd>
        <TransactionTextTd >{amount}</TransactionTextTd>
        <TransactionTextTd >{currency}</TransactionTextTd>
      </tr>
    ))}
  </tbody>
</TransactionWrapper>
}