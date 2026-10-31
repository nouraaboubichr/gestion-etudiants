function StudentStats({ students }) {
  const total = students.length;

  // Liste vide : message, sans division par zéro
  if (total === 0) {
    return <p className="stats-vide">Aucun étudiant</p>;
  }

  const moyenne = students.reduce((somme, s) => somme + s.note, 0) / total;

  return (
    <div className="stats">
      <div>
        <span>Nombre d'étudiants</span>
        <strong>{total}</strong>
      </div>
      <div>
        <span>Moyenne générale</span>
        <strong>{moyenne.toFixed(2)}/20</strong>
      </div>
    </div>
  );
}

export default StudentStats;