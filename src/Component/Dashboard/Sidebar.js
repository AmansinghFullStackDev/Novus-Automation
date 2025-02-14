import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import fullLogo from '../../Assets/logos/profile-p.png'
import smallLogo from '../../Assets/logos/Novus.png'
import '../../Assets/css/style.css'
import { HiOutlineSupport } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiCpu } from "react-icons/fi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdQueueMusic } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { GoDot } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} style={{
        height: '100vh',
        width: collapsed ? '125px' : '350px'
      }}>

        <div className="flex justify-center">
          <a href="https://www.novusapl.com">
            <img src={collapsed ? smallLogo : fullLogo} className={collapsed ? 'w-36 h-28 p-8' : 'w-50 h-28 p-4 '} alt="Logo" />
          </a>
        </div>

        <Menu style={{ color: '#2A3547', marginTop: '24' }}>
          {!collapsed ? <h3 style={{ paddingLeft: '40px', fontWeight: 'inherit', fontSize: '18px' }}> HOME</h3> : <h1 style={{ paddingLeft: '40px', fontWeight: 'bolder' }}>. . .</h1>}

          <MenuItem style={{ marginTop: '15px' }}>
            {collapsed ? (
              <HiOutlineSupport style={{ fontSize: '26px' }} />
            ) : (
              <>
                <HiOutlineSupport style={{ fontSize: '26px' }} />
                <h6>Modern</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <IoCartOutline style={{ fontSize: '26px' }} />
            ) : (
              <>
                <IoCartOutline style={{ fontSize: '26px' }} />
                <h6>Ecommerce</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <BsCurrencyDollar style={{ fontSize: '26px' }} />
            ) : (
              <>
                <BsCurrencyDollar style={{ fontSize: '26px' }} />
                <h6>NFT</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <FiCpu style={{ fontSize: '26px' }} />
            ) : (
              <>
                <FiCpu style={{ fontSize: '26px' }} />
                <h6>Crypto</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <TbActivityHeartbeat style={{ fontSize: '26px' }} />
            ) : (
              <>
                <TbActivityHeartbeat style={{ fontSize: '26px' }} />
                <h6>General</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <MdQueueMusic style={{ fontSize: '26px' }} />
            ) : (
              <>
                <MdQueueMusic style={{ fontSize: '26px' }} />
                <h6>Music</h6>
              </>
            )}
          </MenuItem>

          <SubMenu
            label={
              collapsed ? (
                <></> // Empty when collapsed
              ) : (
                <span style={{ paddingLeft: '12px', fontSize: '20px' }}>Frontend Page</span>
              )
            }
            icon={<LuLayoutGrid style={{ fontSize: '26px' }} />}
          >
            <MenuItem> <GoDot /> <h6>Homepage</h6></MenuItem>
            <MenuItem> <GoDot /> <h6>About us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Contact us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog Details</h6></MenuItem>
          </SubMenu>


          {!collapsed ? <h3 style={{ paddingLeft: '40px', fontWeight: 'inherit', fontSize: '18px', marginTop: 24 }}> APPS</h3> : <h1 style={{ paddingLeft: '40px', fontWeight: 'bolder', marginTop: 24 }}>. . .</h1>}

          <MenuItem style={{ marginTop: '15px' }}>
            {collapsed ? (
              <HiOutlineSupport style={{ fontSize: '26px' }} />
            ) : (
              <>
                <HiOutlineSupport style={{ fontSize: '26px' }} />
                <h6>Calendar</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <IoCartOutline style={{ fontSize: '26px' }} />
            ) : (
              <>
                <IoCartOutline style={{ fontSize: '26px' }} />
                <h6>Kanban</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <BsCurrencyDollar style={{ fontSize: '26px' }} />
            ) : (
              <>
                <BsCurrencyDollar style={{ fontSize: '26px' }} />
                <h6>chat</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <FiCpu style={{ fontSize: '26px' }} />
            ) : (
              <>
                <FiCpu style={{ fontSize: '26px' }} />
                <h6>Email</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <TbActivityHeartbeat style={{ fontSize: '26px' }} />
            ) : (
              <>
                <TbActivityHeartbeat style={{ fontSize: '26px' }} />
                <h6>Notes</h6>
              </>
            )}
          </MenuItem>

          <MenuItem>
            {collapsed ? (
              <MdQueueMusic style={{ fontSize: '26px' }} />
            ) : (
              <>
                <MdQueueMusic style={{ fontSize: '26px' }} />
                <h6>Contact Table</h6>
              </>
            )}
          </MenuItem>
          <MenuItem>
            {collapsed ? (
              <MdQueueMusic style={{ fontSize: '26px' }} />
            ) : (
              <>
                <MdQueueMusic style={{ fontSize: '26px' }} />
                <h6>Contact List</h6>
              </>
            )}
          </MenuItem>
          <MenuItem>
            {collapsed ? (
              <MdQueueMusic style={{ fontSize: '26px' }} />
            ) : (
              <>
                <MdQueueMusic style={{ fontSize: '26px' }} />
                <h6>Invoice</h6>
              </>
            )}
          </MenuItem>


          <SubMenu
            label={
              collapsed ? (
                <></> // Empty when collapsed
              ) : (
                <span style={{ paddingLeft: '12px', fontSize: '20px' }}>Blog</span>
              )
            }
            icon={<LuLayoutGrid style={{ fontSize: '26px' }} />}
          >
            <MenuItem> <GoDot /> <h6>Homepage</h6></MenuItem>
            <MenuItem> <GoDot /> <h6>About us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Contact us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog Details</h6></MenuItem>
          </SubMenu>
          <SubMenu
            label={
              collapsed ? (
                <></> // Empty when collapsed
              ) : (
                <span style={{ paddingLeft: '12px', fontSize: '20px' }}>Frontend Page</span>
              )
            }
            icon={<LuLayoutGrid style={{ fontSize: '26px' }} />}
          >
            <MenuItem> <GoDot /> <h6>Homepage</h6></MenuItem>
            <MenuItem> <GoDot /> <h6>About us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Contact us</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog</h6></MenuItem>
            <MenuItem> <GoDot /><h6>Blog Details</h6></MenuItem>
          </SubMenu>

        </Menu>
      </Sidebar>


      {/* Main Content */}
      <div style={{ flex: 1, padding: '10px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: '#6200ea',
            color: 'black',
            padding: '10px 20px',
          }}
        >
          <div style={{ display: 'flex', gap: '50px' }}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: 'none',
                border: ' gray',  // Correct border syntax
                color: 'gray',
                fontSize: '25px',
                fontWeight: 'bold',
                cursor: 'pointer',
                padding: '8px 16px', // Adds spacing inside the button
                borderRadius: '10px', // Optional for rounded corners
              }}
            >
              ☰
            </button>
            <div>
              {/* Search Icon */}
              <IoSearchOutline
                onClick={() => setShowPopup(true)} // Show popup when clicked
                style={{
                  fontSize: '25px',
                  color: '#2a3547',
                  marginTop: '12px',
                  cursor: 'pointer'
                }}
              />

              {/* Popup Modal */}
              {showPopup && (
                <div style={{
                  position: 'fixed',
                  width: "58%",
                  height: '55%',
                  top: '25%',
                  left: '50%',
                  transform: 'translate(-50%, -40%)',
                  background: 'green',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                  zIndex: 1000,
                  display: 'flex'
                }}>
                  <input type="text" placeholder="Search here..." style={{ padding: '8px', width: '100%', height: '15%' }} />
                  <button
                    onClick={() => setShowPopup(false)}
                    style={{ marginTop: '10px', padding: '8px 12px', cursor: 'pointer' }}
                  >
                    Close
                  </button>
                </div>
              )}

              {/* Background Overlay */}
              {showPopup && (
                <div
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: 'fixed',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999
                  }}
                />
              )}
            </div>
          </div>
          <h2>Dashboard</h2>
        </div>

        <div>
          <p>Welcome to the dashboard!</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
