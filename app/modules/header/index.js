import * as React from 'react'
import style from './header.css'

export default function Header({text}) {
  return <h1 className={style.header}>{text}</h1>
}
