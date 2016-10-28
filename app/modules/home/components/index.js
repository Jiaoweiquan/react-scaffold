import styles from './index.css'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from '../actions'
import { selectors } from 'modules/shared/misc'
import { homeSelector } from '../selectors'

class Home extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    const { posts } = this.props.home
    return (
      <div className={styles.container}>
        <h1>首页</h1>
        {posts.map(post => {
          return <li>{post.title}</li>
        })}
      </div>
    )
  }
}

export default connect(createStructuredSelector({
  language: selectors.languageSelector,
  home: homeSelector
}), actions)(Home)
