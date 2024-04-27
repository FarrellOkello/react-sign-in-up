import { useNavigate } from "react-router-dom";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { StyledButton, StyledTableContainer } from "./styles";

const ParentsTable = ({ parentsData, onRemove }) => (
  <StyledTableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>No.</TableCell>
         <TableCell>Parent name</TableCell>
         <TableCell>contact</TableCell>
         <TableCell>status</TableCell>
          <TableCell>Update</TableCell>
          <TableCell>Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {parentsData.map((parent, index) => (
          <Parent key={parent._id} parent={parent} onRemove={onRemove} index={index} />
        ))}
      </TableBody>
    </Table>
  </StyledTableContainer>
);

const Parent = ({ parent, onRemove, index }) => {
  const {
    _id: id,
    parentName,
    contact,
    status
  } = parent;
  const navigate = useNavigate();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{index + 1}</TableCell>
      <TableCell component="th" scope="row">
      {parentName}
      </TableCell>
      <TableCell>{contact}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>
        <StyledButton icon={<ModeEditIcon />} color="success" onClick={() => navigate(`/update-parent/${id}`)} />
      </TableCell>
      <TableCell>
        <StyledButton icon={<DeleteIcon />} color="error" onClick={() => onRemove(id)} />
      </TableCell>
    </TableRow>
  );
};

export default ParentsTable;
