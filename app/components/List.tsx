import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { list } from "../dry";

function List() {
  return (
    <div className="bg-white shadow rounded-lg text-[#012970]">
      <table className="w-full">
        <tr className="font-semibold text-lg">
          {list.th.map((data) => (
            <td key={data} className="px-6 py-4">
              <div className="flex items-center gap-4">
                <span>{data}</span>
                <button>
                  <BsChevronDown />
                </button>
              </div>
            </td>
          ))}
        </tr>
        {list.body.map((data) => (
          <tr
            key={data.name}
            className="hover:bg-[#dae9ff] duration-200 ease-linear"
          >
            <td className="flex items-center gap-2 px-6 py-4">
              <AiFillFolder fontSize="1.75rem" />
              <span className="font-semibold">{data.name}</span>
            </td>
            <td className="px-6 py-4">{data.lastChanged}</td>
            <td className="px-6 py-4">{data.size}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default List;
