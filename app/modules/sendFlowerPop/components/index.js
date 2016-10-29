import styles from './flowerPop.css'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../actions'
import { selectors } from 'modules/shared/misc'
import { flowerPopSelector } from '../selectors'

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

  render() {
    return (
      <div className={styles.pop}>
        <button>取消</button><button>赠送</button>
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  flowerPop: flowerPopSelector
}), actions)(SendFlowerPop)
