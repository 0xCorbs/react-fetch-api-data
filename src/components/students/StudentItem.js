import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Collapse } from "react-collapse";
import AddTagBar from "components/ui/AddTagBar";

const StudentItem = ({ student, studentName, addTagToStudent }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  const getTagData = (key, value) => {
    if (key === "Enter" && value) {
      addTagToStudent({ studentId: student.id, tagData: value });
    }
  };

  const sumOfScore = student.grades.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );
  const avgScore = sumOfScore / student.grades.length || 0;
  return (
    <div>
      <div className="studentContainer d-flex py-3 border-bottom ">
        <div className="studentImgContainer col-2 ">
          <img
            className="studentImg rounded-circle"
            src={student.pic}
            alt="img unavailable"
          />
        </div>
        <div className="studentInfoContainer col-10">
          <div className="d-flex studentNameContainer justify-content-between">
            <div className="h1 font-weight-bold studentName">{studentName}</div>
            <div className="plusMinusIconContainer">
              {isOpened ? (
                <FaMinus
                  onClick={toggleIsOpened}
                  size={32}
                  className="plusIcon"
                />
              ) : (
                <FaPlus
                  onClick={toggleIsOpened}
                  size={32}
                  className="plusIcon"
                />
              )}
            </div>
          </div>
          <div className="pl-4 ">
            <div>Email: {student.email}</div>
            <div>Company: {student.company}</div>
            <div>Skill: {student.skill}</div>
            <div className="scoresAndTags">
              <div className="mb-1">Average: {avgScore}% </div>
              <Collapse isOpened={isOpened}>
                <div
                  className="studentTestContainer"
                  id={"collapse" + student.id}
                >
                  {student.grades.map((grade, index) => {
                    return (
                      <div key={index} className="d-flex">
                        <div className="studentTest">
                          {"Test " + parseInt(index + 1) + ": "}{" "}
                        </div>
                        <div>{grade + "%"}</div>
                      </div>
                    );
                  })}
                </div>
              </Collapse>
              <div className="studentTagsContainer d-flex">
                {student.tags?.map((tag, index) => {
                  return (
                    <div key={index} className="studentTag">
                      {tag}
                    </div>
                  );
                })}
              </div>
              {isOpened ? "" : <AddTagBar getTagData={getTagData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
