import { useState } from 'react';
import StudentStats from './components/StudentStats';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const initialStudents = [
  { id: 1, nom: 'Alami', prenom: 'Sara', note: 15 },
  { id: 2, nom: 'Bennani', prenom: 'Youssef', note: 12 },
  { id: 3, nom: 'Idrissi', prenom: 'Hiba', note: 17 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="App">
      <h1>Gestion des étudiants</h1>
      <StudentStats students={students} />
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;