import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import Result from "./Result";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [result, setResult] = useState();
  const [isEmpty, setIsEmpty] = useState();

  function search() {
    if (name === "") {
      setResult(null);
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        // console.log(response.data);
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
        setResult("erreur");
      });
  }

  useEffect(() => {
    if (name !== "") {
      setIsEmpty(false);
    }
  }, [name]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "6em",
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
        />
        <button onClick={search}>RECHERCHER</button>
      </div>

      {result && <Result result={result} />}
      {isEmpty && (
        <span style={{ color: "red" }}>Veuillez entrer une recherche.</span>
      )}
    </>
  );
}
