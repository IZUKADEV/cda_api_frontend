import React from "react";

export default function card() {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-2xl shadow-md p-4 w-[600px] h-1/2 flex flex-col">
                <h2 className="text-2xl font-bold text-center">Carambar App</h2>
                <p className="text-gray-600 text-center">Générez et implémenter vos blagues carambar</p>
                <textarea className="border-2 border-gray-300 rounded-md p-2 mt-4" placeholder="Entrez votre blague carambar"></textarea>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-1 self-center">Soumettre</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-auto flex justify-center items-center self-center">Générer une blague aléatoires</button>
            </div>
        </div>
    );
} 