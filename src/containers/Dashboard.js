import React from 'react'
import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'
import { fetchCards } from '../actions'

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.fetchCards()
  }

  render () {
    if (!this.props.cards) return null
    return <DashboardComponent cards={this.props.cards} />
  }
}

export default connect(
  ({ cards }) => ({
    cards
  }),
  { fetchCards }
)(Dashboard)
