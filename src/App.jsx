import React from "react";

import SearchBar from "./components/SearchBar";

export const LevelContext = React.createContext();

export default function CanvasContent() {
  return (
    <>
      <SearchBar />
    </>
  );
}
