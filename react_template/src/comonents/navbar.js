import React from 'react'
import { useState } from 'react';
import '../comonents/navbar.css'
const menu = [
  { menu: "Home" },
  { menu: "About" },
  {
    menu: "Services",
    submenu: [
      { menuitem: 'Web Development' },
      { menuitem: 'Penetration Testing' },
      { menuitem: 'Linux and Servers Security' },
      { menuitem: 'Search Engine Optimization' },
    ]
  },
  { menu: "Hacking" },
  { menu: "Downloads" },
  { menu: "Seminars" },
  { menu: "Contact Us" },
]
const Navbar = () => {
  const [selected, setselected] = useState(0)
  return (
    <>
      <div className="nav-wrraper d-flex justify-content-between align-items-end">
        <div className="logo-wrraper">
          <img src="/images/whitelogo.svg" alt="logo" width='100%' height='100%' />
        </div>
        <nav>
          {menu.map((data, id) => {
            return (
              <>
                <a className={selected === id ? 'active' : ''} href="#" key={id} onClick={() => {
                  setselected(id);
                  console.log(selected);
                }}>{data.menu}</a>
              </>
            )
          })}
        </nav>
        <div className='submenu' style={selected !==2? {display:'none'}:{display:'inline-grid'}}>
          {
            selected == 2 ?
              menu[selected].submenu.map((item, id) => {
                return (
                  <a href="#" key={id}>{item.menuitem}</a>
                )
              }) : <></>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar