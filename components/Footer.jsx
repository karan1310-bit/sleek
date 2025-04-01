import React from "react";

import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[600px] sm:h-[650px] font-variable"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[600px] sm:h-[650px] w-full">
        <Content />
      </div>
    </div>
  );
}
