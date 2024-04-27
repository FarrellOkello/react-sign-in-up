import { useNavigate } from "react-router-dom";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { StyledButton, StyledTableContainer } from "./styles";

const StudentsTable = ({ studentsData, onRemove }) => (
  <StyledTableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
          <TableCell>Reg No.</TableCell>
          <TableCell>Student No.</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Course</TableCell>
          <TableCell>District</TableCell>
          <TableCell>Dob</TableCell>
          <TableCell>Tel No.</TableCell>
          <TableCell>NIN</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Sex</TableCell>
          <TableCell>Year Of sponsorship</TableCell>
          <TableCell>Reason</TableCell>
          <TableCell>Recommender</TableCell>
          <TableCell>Update</TableCell>
          <TableCell>Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {studentsData.map((student, index) => (
          <Student key={student._id} student={student} onRemove={onRemove} index={index} />
        ))}
      </TableBody>
    </Table>
  </StyledTableContainer>
);

const Student = ({ student, onRemove, index }) => {
  const {
    _id: id,
    regNo,
    studentNo,
    name,
    course,
    homeDistrict,
    dob,
    telNumber,
    ninNumber,
    contactAddress,
    sex,
    yearOfSponsorship,
    reason,
    whoRecommendedYou,
  } = student;
  const navigate = useNavigate();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell component="th" scope="row">
      {regNo}
      </TableCell>
      <TableCell>{studentNo}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{course}</TableCell>
      <TableCell>{homeDistrict}</TableCell>
      <TableCell>{dob}</TableCell>
      <TableCell>{telNumber}</TableCell>
      <TableCell>{ninNumber}</TableCell>
      <TableCell>{contactAddress}</TableCell>
      <TableCell>{sex}</TableCell>
      <TableCell>{yearOfSponsorship}</TableCell>
      <TableCell>{reason}</TableCell>
      <TableCell>{whoRecommendedYou}</TableCell>
      <TableCell>
        <StyledButton icon={<ModeEditIcon />} color="success" onClick={() => navigate(`/update-student/${id}`)} />
      </TableCell>
      <TableCell>
        <StyledButton icon={<DeleteIcon />} color="error" onClick={() => onRemove(id)} />
      </TableCell>
    </TableRow>
  );
};

export default StudentsTable;
