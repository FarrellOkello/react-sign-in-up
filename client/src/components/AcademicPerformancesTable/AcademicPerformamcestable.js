import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { StyledButton, StyledTableContainer } from "./styles";

const AcademicPerformancesTable = ({ academicperformancesData, onRemove }) => (
  <StyledTableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Reg No.</TableCell> 
          <TableCell>Year</TableCell> 
          <TableCell>CGPA</TableCell> 
          <TableCell>PLE Result</TableCell> 
          <TableCell>UCE Result</TableCell> 
          <TableCell>UACE Result</TableCell>
          <TableCell>Update</TableCell>
          <TableCell>Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {academicperformancesData.map((academicperformance, index) => (
          <Academicperformance
            key={academicperformance._id}
            academicperformance={academicperformance}
            onRemove={onRemove}
            index={index}
          />
        ))}
      </TableBody>
    </Table>
  </StyledTableContainer>
);

const Academicperformance = ({ academicperformance, onRemove, index }) => {
  const { _id: id, regNo, year, cgpa, pleResult, uceResult, uaceResult } = academicperformance;
  const navigate = useNavigate();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell component="th" scope="row">
        {regNo}
      </TableCell>
      <TableCell>{year}</TableCell> 
      <TableCell>{cgpa}</TableCell> 
      <TableCell>{pleResult}</TableCell> 
      <TableCell>{uceResult}</TableCell> 
      <TableCell>{uaceResult}</TableCell>
      <TableCell>
        <StyledButton
          icon={<ModeEditIcon />}
          color="success"
          onClick={() => navigate(`/update-academicperformance/${id}`)}
        />
      </TableCell>
      <TableCell>
        <StyledButton
          icon={<DeleteIcon />}
          color="error"
          onClick={() => onRemove(id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AcademicPerformancesTable;
