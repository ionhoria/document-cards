import React from 'react'

import paperclip from '../media/paperclip.png'
import formGraphics from '../media/form.png'
import certificateGraphics from '../media/certificate.png'

import '../styles/style.css'

class Card extends React.Component {
  state = {
    expanded: false
  }

  handleChange = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  renderAction = (action, index) => {
    return (
      <div key={index} className='action-container'>
        <button className='action-button'>
          {action}
        </button>
        <i className='material-icons action-icon'>
          arrow_right
        </i>
      </div>
    )
  }

  render () {
    const { name, type, status, graphics, actions, alert } = this.props.card
    const { expanded } = this.state
    return (
      <div className='card-container'>
        <div className='card'>
          <img alt='' src={paperclip} className='paperclip' />
          {alert &&
            <i className='material-icons alert'>notifications_active</i>}
          <div className='header'>
            <div className='name'>
              {name}
            </div>
            <div className='type'>{type}</div>
          </div>
          <div className={'status ' + status.toLowerCase()}>
            {status}
          </div>
          <div className='graphics-container'>
            <img
              className='graphics'
              src={graphics === 'form' ? formGraphics : certificateGraphics}
              alt=''
            />
          </div>
          {actions.length !== 0
            ? <div>
              <button onClick={this.handleChange}>
                {expanded ? 'Close' : 'Open'}
                <i className='material-icons dropdown-arrow'>
                  {expanded ? 'arrow_drop_up' : 'arrow_drop_down'}
                </i>
              </button>
              <div
                style={{
                  display: expanded ? 'block' : 'none'
                }}
                >
                {actions.map((action, index) =>
                    this.renderAction(action, index)
                  )}
              </div>
            </div>
            : <div className='no-actions'>
                No actions available
              </div>}
        </div>
      </div>
    )
  }
}

export default Card
