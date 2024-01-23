import React, { useEffect, useState } from "react";
import Style from "../restApi/Style.css";

const RestApi = () => {
  const [fetchApi, setFetchApi] = useState("users");
  const [data, setData] = useState([]);

  localStorage.setItem("list", JSON.stringify(data));

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${fetchApi}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [fetchApi]);

  return (
    <>
      <div className={Style.content}>
        <button
          onClick={() => {
            setFetchApi("users");
          }}
        >
          Добавить
        </button>
        <button
          onClick={() => {
            setData([]);
            setFetchApi("");
          }}
        >
          Удалить
        </button>
        <div className="box">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <p>{item.name}</p>
                <p>{item.username}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestApi;
