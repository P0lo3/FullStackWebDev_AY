import React from "react";

let date = new Date();

function Footer() {
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
}

export { Footer };
