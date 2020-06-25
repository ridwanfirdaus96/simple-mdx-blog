import React from 'react'
import { TableWrapper } from '../elements'

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <Table>{children}</Table>
    </TableWrapper>
  )
}
