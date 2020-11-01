import React from "react";

const MangaCard = ({ published, type, start, status }) => {
  return (
      <table>
        <tbody>
          <tr>
            <th>Published:</th>
            <td>{published}</td>
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

export default MangaCard;
