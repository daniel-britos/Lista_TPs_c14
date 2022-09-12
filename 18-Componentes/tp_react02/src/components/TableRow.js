import React from "react";

const TableRow = ({ movie }) => {
  const { title, length, rating, genres, awards } = movies;
  return (
    <div>
      <tr>
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>
          <ul>
            {genres.map((genres) => (
              <li key={genre + index}>{genre}</li>
            ))}
          </ul>
        </td>
        <td>{awards}</td>
      </tr>
    </div>
  );
};
export default TableRow;
