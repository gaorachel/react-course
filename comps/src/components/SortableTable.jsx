// @ts-nocheck
import React, { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) return col;

    return {
      ...col,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(col.label)}>
          <div className="flex items-center">
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  let sortedDate = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((col) => col.label === sortBy);
    sortedDate = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") return valueA.localeCompare(valueB) * reverseOrder;
      else return (valueA - valueB) * reverseOrder; // if valueA and b are numbers
    });
  }

  // return (
  //   <div>
  //     {/* {sortOrder} - {sortBy} */}
  //     <Table {...props} config={updatedConfig} data={sortedDate} />
  //   </div>
  // );
  return <Table {...props} config={updatedConfig} data={sortedDate} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );

  if (sortOrder === null)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  else if (sortOrder === "asc")
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  else if (sortOrder === "desc")
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
}

export default SortableTable;
