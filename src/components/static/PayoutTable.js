import React from 'react';
import { Table } from 'semantic-ui-react';

const TableExampleStriped = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Round</Table.HeaderCell>
        <Table.HeaderCell>1st Place</Table.HeaderCell>
        <Table.HeaderCell>Team</Table.HeaderCell>
        <Table.HeaderCell>Community</Table.HeaderCell>
        <Table.HeaderCell>Charity</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>1</Table.Cell>
        <Table.Cell><a href="/">1.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">1.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.123 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.123 ETH</a></Table.Cell>
        <Table.Cell>2/27/2017</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>2</Table.Cell>
        <Table.Cell><a href="/">4.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">4.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.423 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.423 ETH</a></Table.Cell>
        <Table.Cell>3/8/2017</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>3</Table.Cell>
        <Table.Cell><a href="/">1.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">1.234 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.123 ETH</a></Table.Cell>
        <Table.Cell><a href="/">0.123 ETH</a></Table.Cell>
        <Table.Cell>3/18/2017</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleStriped