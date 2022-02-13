import React, { useState, useMemo } from "react";
import StudentItem from "./StudentItem";
import SearchBar from "components/ui/SearchBar";

const StudentsList = ({ students, isLoading }) => {
  const [filterNameData, setFilterNameData] = useState("");
  const [filterTagData, setFilterTagData] = useState("");
  const [key, setKey] = useState([]);

  const addTagToStudent = (data) => {
    const id = data.studentId;
    const student = students.find((student) => student.id === id);
    student.tags
      ? student.tags.push(data.tagData)
      : (student.tags = [data.tagData]);
    students[data.studentIndex] = student;
    setKey(Date.now());
  };

  const filterStudents = useMemo(() => {
    if (!students) return;
    if (filterTagData === "" && filterNameData === "") return students;
    return students?.filter((student) => {
      if (filterTagData !== "" && !student.tags) return false;
      if (
        filterTagData !== "" &&
        student.tags &&
        student.tags.findIndex((element) => element.includes(filterTagData)) ===
          -1
      )
        return false;

      const name = student?.firstName + " " + student?.lastName;
      if (
        filterNameData !== "" &&
        name &&
        !name.toLowerCase().includes(filterNameData.toLowerCase())
      )
        return false;

      return true;
    });
  }, [students, filterNameData, filterTagData]);

  return isLoading ? (
    <h1>LOADING..</h1>
  ) : (
    <div>
      <SearchBar
        setFilterData={setFilterNameData}
        placeholder="Seach by name"
      />
      <SearchBar setFilterData={setFilterTagData} placeholder="Seach by tag" />
      {filterStudents.map((student, index) => {
        const studentName = student.firstName + " " + student.lastName;
        return (
          <StudentItem
            key={student.id + key}
            student={student}
            studentName={studentName}
            index={index}
            addTagToStudent={addTagToStudent}
          />
        );
      })}
    </div>
  );
};

export default StudentsList;
