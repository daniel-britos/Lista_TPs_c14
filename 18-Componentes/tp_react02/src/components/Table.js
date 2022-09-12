import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  const data = [
    {
      title: "Star Wars - Clone War",
      length: 160,
      rating: 8,
      genres: ["Acción", "Ciencia Ficción"],
      awards: 6,
    },
    {
      title: "Star Wars - El último Jedi",
      length: 125,
      rating: 7,
      genres: ["Acción", "Ciencia Ficción"],
      awards: 5,
    },
  ];
  return (
    <div className="container-fluid mb-4">
      <div className="card shadow">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Duración</th>
              <th scope="col">Rating</th>
              <th scope="col">Genero</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => (
              <TableRow movie={movie} key={movie.title + index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
