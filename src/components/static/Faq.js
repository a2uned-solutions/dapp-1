import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Why Should I Play CheersDApp?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>Lorem ipsum, get some content here...</p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Installing MetaMask, your digital wallet
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Lorem ipsum, get some content here...</p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Getting Ether, your digital currency
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Lorem ipsum, get some content here...</p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How to send ETH to MetaMask
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>Lorem ipsum, get some content here...</p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          More MetMask Info
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>Lorem ipsum, get some content here...</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}