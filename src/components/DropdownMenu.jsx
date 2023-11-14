import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({names}) => {
  return (
      <React.Fragment>
      {names.map((name,index) => (
        <li key={index}>
          <Link className="dropdown-item drop-item  pe-4" to={name.url}>{name.name}</Link>
        </li>))}
        </React.Fragment>
  );
};

export default DropdownMenu;