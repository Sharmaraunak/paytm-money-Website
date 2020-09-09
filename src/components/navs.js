import React, { useState } from "react";
import style from "../styles/nav.module.css";
import { Popover, PopoverBody } from "reactstrap";

const Nav = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className={style.navText} id="popover">
      <div className={style.item}>
        <div className={style.itemDetail}>
          <div className={style.name}>
            <p >{props.name}</p>
          </div>
          <Popover
            placement="bottom-start"
            isOpen={popoverOpen}
            target="popover"
            toggle={toggle}
          >
            <PopoverBody>
              <div class={style.list}>
                  <span className={style.Text}>Mutual Funds</span>
                  <span className={style.Text}>Stock Market</span>
                  <span className={style.Text}>NPS Retirement Funds</span>
              </div>
            </PopoverBody>
          </Popover>
          <span className={style.sign}></span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
