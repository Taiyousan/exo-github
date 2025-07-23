import { useState } from "react";

export default function Result({ result }) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "6em",
          //   backgroundColor: "red",
        }}
      >
        {result === "erreur" ? (
          "Aucun profil trouvé !"
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // gap: "2em",
            }}
          >
            <img src={result.avatar_url} alt="" style={{ width: "5em" }} />
            <p style={{ textAlign: "center" }}>Pseudo : {result.login}</p>
            <p style={{ textAlign: "center" }}>Nom : {result.name}</p>
            <p style={{ textAlign: "center" }}>Bio : {result.bio}</p>
            <p style={{ textAlign: "center" }}>
              Nombre de dépôts publics : {result.public_repos}
            </p>
            <p style={{ textAlign: "center" }}>
              Nombre de followers : {result.followers}
            </p>
            <a href={result.html_url} target="_blank">
              Lien vers le profil github
            </a>
          </div>
        )}
      </div>
    </>
  );
}
