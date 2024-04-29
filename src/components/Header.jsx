import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import {
  Hide,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";

function Header() {
  return (
    // The full width would still inherit width from it's parent section.
    <div className="w-full flex items-center justify-between">
      {/* HEADER LOGOS */}

      <div className="flex gap-3">
        <img src="buesa-logo.webp" width={48} height={48} alt="buesa-logo" />
        <img src="busa-logo.webp" width={48} height={48} alt="buesa-logo" />
      </div>

      <ul className="sidebar-active:hidden flex justify-between md:gap-6 lg:gap-0 w-[32%] text-buesa-grey">
        <li className="text-buesa-blue">Home</li>{" "}
        {/* I would just make it like this for now*/}
        <li>Announcement</li>
        <li>Feedback</li>
      </ul>
      <Button className="sidebar-active:hidden" />

      {/* FOR MOBILE */}
      <Show breakpoint="(max-width: 856px)">
        <Menu>
          <MenuButton>
            <RxHamburgerMenu
              size={25}
              strokeWidth={0.3}
              className="sidebar-inactive:hidden cursor-pointer"
            />
          </MenuButton>
          <MenuList className="bg-[#faf9f7] text-buesa-grey p-2 rounded-lg">
            <MenuGroup>
              <MenuItem className="p-2">
                <p>Home</p>
              </MenuItem>
              <MenuItem className="p-2">
                <p>Announcement</p>
              </MenuItem>
              <MenuItem className="p-2">
                <p>Feedback</p>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Show>
    </div>
  );
}

export default Header;
