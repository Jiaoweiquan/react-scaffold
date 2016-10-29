import * as React from 'react'
import style from './item.css'

export default function ListItem({userName, count, imgSrc}) {
  return (<li className={style.item}>
    <img src={imgSrc} />
    <span>{userName}</span><i>{count}</i>
  </li>)
}
