import React, { useContext } from 'react'
import styles from './App.module.css'
import WidgetContext from '../context/widgetContext'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App({ handleOpen: restHandleOpen, ...props }) {
  const { isOpen, handleOpen } = useContext(WidgetContext)

  restHandleOpen = () => {
    return handleOpen()
  }

  return (
    <div className={`${styles.root} ${isOpen ? styles.open : styles.close}`}>
      <Header handleOpen={handleOpen} {...props} />
      <ChatSection {...props} />
      <SendButton {...props} />
    </div>
  )
}
