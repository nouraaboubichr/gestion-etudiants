import { useState } from 'react';

function StudentForm({ onAdd }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    if (!nom.trim() || !prenom.trim()) {
      setErreur('Le nom et le prénom sont obligatoires.');
      return;
    }

    const noteNum = Number(note);
    if (note.trim() === '' || Number.isNaN(noteNum) || noteNum < 0 || noteNum > 20) {
      setErreur('La note doit être comprise entre 0 et 20.');
      return;
    }

    onAdd({ nom: nom.trim(), prenom: prenom.trim(), note: noteNum });

    // Réinitialisation des champs
    setNom('');
    setPrenom('');
    setNote('');
    setErreur('');
  };

  return (
    <section>
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="champs">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            type="number"
            step="any"
            placeholder="Note (0–20)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {erreur && <p className="erreur">{erreur}</p>}

        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}

export default StudentForm;