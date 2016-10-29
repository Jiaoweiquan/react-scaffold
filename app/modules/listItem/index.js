import * as React from 'react'
import style from './item.css'

export default function ListItem({userName, count, imgSrc, onSelect}) {
  return (
    <li className={style.item} onClick={onSelect}>
      <div className={style.container}>
        <img src={imgSrc} />
        <span>{userName}</span><i className={style.count}>{count}</i>
      </div>
    </li>
  )
}
