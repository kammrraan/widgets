import React from "react";
import { Link } from "react-router-dom";


export default function MenuBar() {
  return (
    <div>
      <div className="ui pointing menu">
        <Link className=" item" to='/Accordian'>Accordian</Link>
        <Link className=" item" to='/Search'>Searchbar</Link>
      </div>
    </div>
  );
}
