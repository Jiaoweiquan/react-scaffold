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
    this.state = {
      value: 1
    }
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

  getOptions() {
    let list = []
    for (let i = 1; i <= 10; i++) {
      list.push(<option key={i} value={i}>{i}</option>)
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

  onSelect(eve) {
    this.setState({value: eve.target.value})
  }

  getSelector() {
    return <select className={styles.selector} onChange={this.onSelect.bind(this)} value={this.state.value}>
      {this.getOptions()}
    </select>
  }

  sendFlower() {
    this.props.sendFlower({
      uid: this.props.flowerPop.userId,
      count: parseInt(this.state.value)
    })
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
        <button onClick={this.sendFlower.bind(this)}>赠送</button>
      </div>
    </div>
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  flowerPop: flowerPopSelector
}), actions)(SendFlowerPop)
