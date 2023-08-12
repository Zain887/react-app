import './navbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const menu = [
  { menu: "Home", pagelink:'/' },
  { menu: "About", pagelink:'/About' },
  {
    menu: "Services",
    submenu: [
      { menuitem: 'Web Development', pagelink:'' },
      { menuitem: 'Penetration Testing', pagelink:'' },
      { menuitem: 'Linux and Servers Security', pagelink:'' },
      { menuitem: 'Search Engine Optimization', pagelink:'' },
    ]
  },
  { menu: "Hacking", pagelink:'/Hacking' },
  { menu: "Downloads" , pagelink:'/Downloads'},
  { menu: "Seminars", pagelink:'/Seminars' },
  { menu: "Contact Us", pagelink:'/ContactUs' },
]
const Navbar = () => {
  const [selected, setselected] = useState(0)
  return (
    <>
      <div className="nav-wrraper flex justify-between items-center">
        <div className="w-[10vw]">
          <img src="/images/whitelogo.svg" alt="logo" width='100%' height='100%' />
        </div>
        <nav>
          {menu.map((data, id) => {
            return (
              <>
                <Link className={selected === id ? 'text-red-500 text-2xl font-bold mr-10' : 'text-white text-2xl font-bold mr-10'} to={data.pagelink} key={id} onClick={() => {
                  setselected(id);
                  console.log(selected);
                }}>{data.menu}</Link>
              </>
            )
          })}
        </nav>
        <div className='submenu' style={selected !==2? {display:'none'}:{display:'inline-grid'}}>
          {
            selected == 2 ?
              menu[selected].submenu.map((item, id) => {
                return (
                  <Link to={item.pagelink} key={id}>{item.menuitem}</Link>
                )
              }) : <></>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar