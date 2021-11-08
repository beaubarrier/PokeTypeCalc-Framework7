import React, { useState, useEffect } from "react";
import PokeTypeCalc from "../main.jsx";
import TypeData from "../TypeData.js";

import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
} from "framework7-react";

const HomePage = () => {
  return (
    <Page className="home">
      {/* Top Navbar */}
      {/* <Navbar large>
      <NavTitle>pokeTypeCalc</NavTitle>
      <NavTitleLarge>pokeTypeCalc</NavTitleLarge>
    </Navbar> */}
      {/* Toolbar */}
      {/* <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar> */}
      {/* Page content */}
      <Block>
        <PokeTypeCalc />
      </Block>
      {/* <Block strong></Block> */}
    </Page>
  );
};
export default HomePage;
