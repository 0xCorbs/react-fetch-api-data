import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentsList from "components/students/StudentsList";

import "App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const result = await axios(
          "https://api.hatchways.io/assessment/students"
        );
        setStudents(result.data.students);
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchStudent();
  }, []);

  return (
    <div>
      <StudentsList isLoading={isLoading} students={students} />
    </div>
  );
};

export default App;
