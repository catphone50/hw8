import React, { useEffect } from "react";
import Item from "../item";
import PropTypes from "prop-types";

function ListItems({ items }) {
  useEffect(() => {
    console.log("компонент обновлен");
  }, []);

  return (
    <ul>
      {items.map((item, ind) => {
        return <Item title={item} key={ind} />;
      })}
    </ul>
  );
}

ListItems.propTypes = {
  items: PropTypes.array,
};

export default ListItems;
