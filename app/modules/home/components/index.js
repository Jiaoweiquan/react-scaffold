import styles from './index.css'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../actions'
import { selectors } from 'modules/shared/misc'
import { homeSelector } from '../selectors'

import Header from 'modules/header'
import ListItem from 'modules/listItem'
import avatar from 'static/images/0.png'

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
    console.log('you have select', log)
  }

  render() {
    const { flowerLog } = this.props.home
    return (
      <div className={styles.container}>
        <Header text="送花排行榜" />
        <ul className={styles.log_list}>
          {
            flowerLog.map(log => {
              return (
                <ListItem
                  key={log.uid}
                  onClick={this.onSelectItem.bind(this, log)}
                  userName={'anoymous' || log.uid}
                  count={log.amount}
                  imgSrc={avatar} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  home: homeSelector
}), actions)(Home)
