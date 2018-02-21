import React from 'react'
import { Icon, Statistic } from 'semantic-ui-react'

const StatisticExampleEvenlyDivided = () => (
  <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>
        18/100
      </Statistic.Value>
      <Statistic.Label>Games Played this Round</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='beer' />
        1239
      </Statistic.Value>
      <Statistic.Label>Current High Score</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value><Icon name='beer' />2200</Statistic.Value>
      <Statistic.Label>All Time High Score</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value style={{ color:'#527435' }}>$500</Statistic.Value>
      <Statistic.Label>To Charity</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default StatisticExampleEvenlyDivided