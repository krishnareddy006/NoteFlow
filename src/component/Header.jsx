import React from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

function Header() {
  return (
    <header>
      <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StickyNote2Icon fontSize="large" style={{ paddingTop: "3px" }} />
        NoteFlow
    </h1>
    </header>
  );
}

export default Header;
