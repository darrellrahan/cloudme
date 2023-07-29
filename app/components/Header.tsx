import React from "react";
import Logo from "./Logo";
import { BsChevronDown } from "react-icons/bs";

function Header() {
  return (
    <section id="header">
      <header className="bg-white p-6 flex items-center justify-between shadow-[0px_1px_4px_#b6b6b6] fixed top-0 inset-x-0">
        <div className="flex items-center">
          <div className="w-[17.1875rem]">
            <Logo />
          </div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Cari"
            className="w-[20rem] h-[3.125rem] pl-12 pr-3 text-xl bg-[#efefef] rounded bg-[url('/search.svg')] bg-[calc(0%_+_12px)_center] bg-no-repeat duration-300 ease-linear focus:w-[26.25rem] placeholder:text-[#808080]"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/smkn4bdg.svg" alt="img" width={40} height={40} />
            <div>
              <h4 className="text-xl text-[#012970]">SMKN 4 Bandung</h4>
              <p className="text-[#808080]">smkn4bdg@mail.com</p>
            </div>
          </div>
          <button className="text-xl duration-300 ease-linear hover:opacity-50">
            <BsChevronDown />
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
