import style from './Navbar.module.css'
import { Image } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Notification from '../../components/notification/Notification'

export default function Navbar(props) {

  const [ notif, setNotif ] = useState(false)

  return (
    <div className={style.navbar}>
      <div className={style.headerLeft}>
        <label htmlFor="search">
          <Image src="/icons/search-icon.svg"/>
        </label>
        <input type="text" placeholder="Search"/>
      </div>
      <div className={style.headerRight}>

        
        <Notification
          show={notif}
          onHide={() => setNotif(false)}
          notif={props.content}
          key={props.content}
        />
        
        <Link to="/messages" className={style.btnMessage} style={{marginRight: "20px"}}>
          <Image src="/icons/paper-plane.svg"/>
        </Link>

        <Link to="/create-post" className={style.btnCreate}>
          <Image src="/icons/plus-icon.svg"/>
          <span>Create Post</span>
        </Link>
      </div>
    </div>
  )
}