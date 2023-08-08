import React from "react";
import List from "./List";
import Title from "./Title";

function Inactive() {
  return (
    <section id="inactive">
      <div className="space-y-8">
        <Title page="Surat Inaktif" />
        <List />
      </div>
    </section>
  );
}

export default Inactive;
