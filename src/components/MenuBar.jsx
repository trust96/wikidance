import React,{useContext} from 'react';
impo

export default function MenuBar() {
    const toggle = useContext()
    return (
        <Menu
        onClick={() => {
          settoggle((prevstate) => !prevstate);
        }}
      >
        <MenuItem className={`${toggle ? 'top' : ''}`} />
        <MenuItem className={`${toggle ? 'center' : ''}`} />
        <MenuItem className={`${toggle ? 'bottom' : ''}`} />
      </Menu>
    )
}
