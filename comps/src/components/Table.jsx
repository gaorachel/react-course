import React from "react";

function Table({ data }) {
  const renderedRows = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p3"> {fruit.name} </td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className="p-3"> {fruit.score} </td>
      </tr>
    );
  });

  console.log(data.value);
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b2">
          <th>Fruit</th>
          <th>Color</th>
          <th>score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
