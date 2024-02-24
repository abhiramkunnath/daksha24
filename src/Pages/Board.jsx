import { useState, useEffect } from "react";

import "./Board.scss";

function Board() {
  const columns = ["Team", "Points"];
  const [boardData, setBoardData] = useState([]);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(new Date());
  const [mins, setMins] = useState(0);

  const getLastUpdatedTime = () => {
    setMins(Math.floor(Math.abs(new Date() - lastUpdatedTime) / 60000));
  };

  const getBoardData = () => {
    fetch("/boardData.json")
      .then((response) => response.json())
      .then((data) =>
        setBoardData(
          data.sort((a, b) => {
            return b.point - a.point;
          })
        )
      )
      .catch((error) => console.error("Error fetching data: ", error));
    setLastUpdatedTime(new Date());
  };

  useEffect(() => {
    getBoardData();
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      getBoardData();
    }, 1000 * 60 * 15);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      getLastUpdatedTime();
    }, 1000 * 60 * 1);
    return () => clearInterval(interval2);
  }, []);

  return (
    <div className="board--box">
      <div className="title--box">
        <h1>Leader Board</h1>
        <span>Updated {mins} minute(s) ago</span>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boardData.map((row, index) => (
            <tr key={index}>
              <td className="teamName">
                {row.teamName}
                <span>{`${row.year} year`}</span>
              </td>
              <td className="points">{row.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
