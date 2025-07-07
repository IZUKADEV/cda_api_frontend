import React, { useState } from "react";

export default function Card() {

  // permet de créer et de gérer un état local 
  // = stocker les blagues,id ect en local
  const [blague, setBlague] = useState("");
  const [blagues, setBlagues] = useState([]);
  const [id, setId] = useState("");
  const [randomBlague, setRandomBlague] = useState("");

  const apiUrl = "https://cda-api-brief.onrender.com/blagues"; // const 

  // Ajouter une blague
  const handleSubmit = async () => {
    if (!blague) return alert("Veuillez entrer une blague");
    const res = await fetch(apiUrl, {
      method: "POST", // là on va définir la méthode post 
      headers: { "Content-Type": "application/json" }, // Ça indique au serveur que le contenu du corps de la requête est au format JSON.
      body: JSON.stringify({ content: blague }), // on convertit le json en chaine de caractère
    });

    const data = await res.json(); // on attend la réponse json
    alert("Blague ajoutée !"); // alert blague ajoutée
    console.log(data); // on test dans la console
    setBlague(""); // reset input
  };

  // Consulter toutes les blagues
  const fetchAll = async () => {
    const res = await fetch(apiUrl); // on attend le fetch de l'url pour envoyer la resp
    const data = await res.json(); // on attend la resp pour envoyer les données json
    setBlagues(data); // func setBlagues qui envoie les données
     // on renitialise l'input
  };

  // Consulter une blague par ID
  const fetchById = async () => {
    if (!id) return; // si id vide on return les données
    const res = await fetch(`${apiUrl}/${id}`); // apiUrl variable & id variable 
    const data = await res.json(); 
    setRandomBlague(data.content);
  };

  // Consulter une blague aléatoire
  const fetchRandom = async () => {
    const res = await fetch(`${apiUrl}/random/blagues`);
    const data = await res.json();
    setRandomBlague(data.content);
  };

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto bg-white mt-24 rounded-2xl">
      <h1 className="text-2xl font-bold text-center">Blagues Carambar</h1>


      <div className="flex flex-col space-y-2">
        <textarea
          className="border-2 border-gray-300 rounded-md p-2"
          placeholder="Entrez votre blague carambar"
          value={blague}
          onChange={(e) => setBlague(e.target.value)} // Quand l’utilisateur écrit dans le champ, on récupère ce qu’il tape (e.target.value) et on met à jour la variable blague avec setBlague().
        />
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Soumettre
        </button>
      </div>

      {/* Consulter une blague par ID */}
      <div className="flex flex-col space-y-2">
        <input
          type="number"
          className="border-2 border-gray-300 rounded-md p-2"
          placeholder="Entrez un ID"
          value={id}
          onChange={(e) => setId(e.target.value)} // Quand l’utilisateur écrit dans le champ, on récupère ce qu’il tape (e.target.value) et on met à jour la variable blague avec setBlague().
        />
        <button
          onClick={fetchById}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
        >
          Chercher par ID
        </button>
      </div>

      {/* Blague aléatoire */}
      <button
        onClick={fetchRandom}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
      >
        Générer une blague aléatoire
      </button>

      {randomBlague && ( // si cette condition est vraie alors fait ça
        <div className="bg-white shadow-md rounded-md p-4 border border-yellow-400">
          <p className="font-medium text-center">{randomBlague}</p>
        </div>
      )}

      <button
        onClick={fetchAll}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full cursor-pointer"
      >
        Voir toutes les blagues
      </button>

      {blagues.length > 0 && ( // Si le tableau contient au moins un élément alors on continue
        <ul className="bg-gray-100 rounded-md p-4 space-y-2">
          {blagues.map((b) => ( // Map permet de générer un tableau sur toutes les blagues | boucle
            <li key={b.id} className="text-gray-800 border-b py-1"> 
              {b.id}. {b.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
