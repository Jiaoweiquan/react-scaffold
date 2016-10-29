import styles from './index.css'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../actions'
import { selectors } from 'modules/shared/misc'
import { homeSelector } from '../selectors'

import Header from 'modules/header'
import ListItem from 'modules/listItem'
import { component as SendFlowerPop, actions as flowerPopActions } from 'modules/sendFlowerPop'
import {getAvatar} from 'utils/browser'

console.log(SendFlowerPop)
// <SendFlowerPop />

class Home extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    // this.onSelectItem = this.onSelectItem.bind(this)
    'something here'
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.getSendFlowerLog()
  }

  componentDidUpdate(prevProps, prevState) {
  }

  onSelectItem(log) {
    this.props.openPop({userName: this.getUserName(log.uid), userId: log.uid})
  }

  getUserName(uid) {
    let ret = ''
    this.props.home.users.forEach(user => {
      if (user.uid === uid) {
        ret = user.name
      }
    })
    return ret || 'anoymous'
  }

  render() {
    const { flowerLog } = this.props.home
    return (
      <div className={styles.container}>
        <Header text="送花排行榜" />
        <ul className={styles.log_list}>
          {
            flowerLog.map((log, ind) => {
              return (
                <ListItem
                  key={log.uid}
                  onSelect={this.onSelectItem.bind(this, log)}
                  userName={this.getUserName(log.uid)}
                  count={log.amount}
                  imgSrc={getAvatar(ind)} />
              )
            })
          }
        </ul>
        <SendFlowerPop />
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  home: homeSelector
}), {...flowerPopActions, ...actions})(Home)
