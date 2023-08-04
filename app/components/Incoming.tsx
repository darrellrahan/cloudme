import React from "react";
import List from "./List";
import Title from "./Title";

function IncomingMail() {
  return (
    <section id="incoming">
      <div className="space-y-8">
        <Title page="Surat Masuk" />
        <List />
      </div>
    </section>
  );
}

export default IncomingMail;
