import React from "react";
import List from "./List";
import Title from "./Title";

function OutgoingMail() {
  return (
    <section id="outgoing">
      <div className="space-y-8">
        <Title page="Surat Keluar" />
        <List />
      </div>
    </section>
  );
}

export default OutgoingMail;
