import { useState } from 'react';

function StudentList({ students, onDelete }) {
  const [recherche, setRecherche] = useState('');

  // Filtre par nom, sans tenir compte des majuscules/minuscules
  const filtres = students.filter((s) =>
    s.nom.toLowerCase().includes(recherche.trim().toLowerCase())
  );

  return (
    <section>
      <h2>Liste des étudiants</h2>

      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtres.length === 0 ? (
            <tr>
              <td colSpan={4}>Aucun étudiant trouvé.</td>
            </tr>
          ) : (
            filtres.map((s) => (
              <tr key={s.id}>
                <td>{s.nom}</td>
                <td>{s.prenom}</td>
                <td>{s.note}</td>
                <td>
                  <button className="supprimer" onClick={() => onDelete(s.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default StudentList;