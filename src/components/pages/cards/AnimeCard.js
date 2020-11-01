import React from "react";

const AnimeCard = ({ aired, type, start, status }) => {
  return (
      <table>
        <tbody>
          <tr>
            <th>Aired:</th>
            <td>{aired}</td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{type}</td>
          </tr>
          <tr>
            <th>Start Date:</th>
            <td>{start}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
  );
};

export default AnimeCard;
