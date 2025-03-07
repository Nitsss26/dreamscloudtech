import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { useForm } from "react-hook-form";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#fffff5",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],

  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function EditCampuses({ open, setopen, name, setname, onSubmit, loading }) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={() => setopen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}

    >
      <DialogTitle id="customized-dialog-title" onClose={() => setopen(false)}>
        Edit Section
      </DialogTitle>
      <DialogContent dividers style={{ backgroundColor: "#fffff5" }}>
        <form action="" style={{ backgroundColor: "#fffff5" }}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#fffff9" }}
                value={name}
                ref={register({ required: true })}
                onChange={(e) => setname(e.target.value)}
                type="text"
                className="form-control"
                name="name"
              />
              {errors.name && (
                <span className=" form-error text-danger mb-2">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className=" offset-sm-2 col-xs-8 col-sm-3">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className="btn red__btn"
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditCampuses;
