import styles from './flowerPop.css'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../actions'
import { selectors } from 'modules/shared/misc'
import { flowerPopSelector } from '../selectors'
import { detectMobile } from 'utils/browser'

class SendFlowerPop extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    'something here'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  getList() {
    let list = []
    for (let i = 1; i <= 10; i++) {
      list.push(<li key={i}>{i}</li>)
    }
    return list
  }

  getSelectComp() {
    return <div className={styles.slide_wrapper} >
      <ul className={styles.slide}>
        {this.getList()}
      </ul>
      <i></i>
    </div>
  }

  getSelector() {
    return <selector></selector>
  }

  render() {
    const {userName} = this.props.flowerPop
    let show = {
      display: 'none'
    }
    if (this.props.flowerPop && this.props.flowerPop.isOpen) {
      show.display = 'block'
    }
    return <div className={styles.pop} style={show} >
      <p className={styles.title}>为{userName}送花</p>
      {
        detectMobile() ? this.getSelectComp() : this.getSelector()
      }
      <div className={styles.bottom}>
        <button onClick={() => this.props.closePop()}>取消</button>
        <button>赠送</button>
      </div>
    </div>
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  flowerPop: flowerPopSelector
}), actions)(SendFlowerPop)
