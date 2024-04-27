import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import ArchiveIcon from "@material-ui/icons/Archive";
import BackupIcon from "@material-ui/icons/Backup";
import SaveIcon from "@material-ui/icons/Save";
// import CheckIcon from "@mui/icons-material/icons/Check";
import { CardHeaderToolbar } from "../helper/controls";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

function TableCardHeader(props) {
  const classes = useStyles();

  const {
    handleHButtonClick,
    HButtonText,
    icon,
    disabled,
    color = "secondary",
  } = props;

  const renderIcon = (action) => {
    switch (action) {
      case "close":
        return <CloseIcon />;
      case "download":
        return <ArchiveIcon />;
      case "upload":
        return <BackupIcon />;
      case "save":
        return <SaveIcon />;
      // case "check":
      //   return <CheckIcon />;
      default:
        return <AddIcon />;
    }
  };

  return (
    <CardHeaderToolbar>
      <Chip
        size="medium"
        color={color}
        avatar={<Avatar>{renderIcon(icon)}</Avatar>}
        label={HButtonText}
        onClick={handleHButtonClick}
        className={classes.chip}
        variant="outlined"
        disabled={disabled}
      />
    </CardHeaderToolbar>
  );
}

export default TableCardHeader;
