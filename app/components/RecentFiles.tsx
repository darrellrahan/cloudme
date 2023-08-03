import React from "react";
import { recentFiles } from "../dry";

function RecentFiles() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-[#012970] text-2xl font-semibold mb-4">
        Recent Files / Folders
      </h3>
      <div className="grid grid-cols-3 gap-8">
        {recentFiles.map((data) => (
          <div
            key={data.name}
            className="bg-white shadow rounded-lg p-4 flex items-center gap-4"
          >
            <data.icon.type color={data.icon.color} fontSize="2.5rem" />
            <div>
              <p className="text-[#012970] font-semibold text-lg">
                {data.name}
              </p>
              {data.details && (
                <p className="text-black/50 text-sm">
                  {data.details.items} Item{data.details.items !== 1 && "s"} |{" "}
                  {data.details.size} kb
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentFiles;
