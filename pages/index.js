import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import FilterListIcon from "@material-ui/icons/FilterList";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import { format } from "date-fns";
import EnhancedTable from "../src/ui/EnhancedTable";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  service: {
    fontWeight: 300,
  },
  users: {
    marginRight: 0,
  },
  button: {
    fontFamily: "Merienda One",
    color: "#fff",
    background:
      "linear-gradient(45deg, #ec407a 20%, #7c4dff 60%, #2979ff 90% )",
    borderRadius: 50,
    textTransform: "none",
    "&:hover": {
      background:
        "linear-gradient(45deg, #bbdefb 20%, #f8bbd0 60%, #d1c4e9 90% )",
      color: "#d81b60",
      fontFamily: "Merienda One",
    },
  },
}));

function createData(
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total,
  search
) {
  return {
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total,
    search,
  };
}

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [rows, setRows] = useState([
    createData(
      "Seher Mahmud",
      "8/17/2020",
      "Website",
      "Interactive",
      "N/A",
      "N/A",
      "N/A",
      "$100",
      true
    ),
    createData(
      "Safin Mahmud",
      "8/16/2020",
      "Website",
      "Basic",
      "N/A",
      "N/A",
      "N/A",
      "$60",
      true
    ),
    createData(
      "MD. Dulal Mahmud",
      "8/16/2020",
      "iOS/Android App",
      "Photo/Video, File Transfer, Biometrics, and Push Notifications",
      "medium complexity",
      "iOS",
      "10-100",
      "$281.25",
      true
    ),
    createData(
      "Sadia Saima Islam",
      "8/16/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$156.25",
      true
    ),
    createData(
      "zizali",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$156.25",
      true
    ),
    createData(
      "Kai",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$156.25",
      true
    ),
    createData(
      "sanena",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$156.250",
      true
    ),
    createData(
      "beark",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$156.25",
      true
    ),
    createData(
      "Hari",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Kanlim",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Nina",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Icihgo",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Max",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Zoey",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
    createData(
      "Yuki",
      "8/18/2020",
      "Custom Software",
      "Photo/Video, File Transfer, and Push Notifications",
      "medium complexity",
      "Web",
      "10-100",
      "$180.00",
      true
    ),
  ]);

  const platformOptions = ["Web", "iOS", "Android"];
  var featureOptions = [
    "Photo/Video",
    "GPS",
    "File Transfer",
    "Users/Authentication",
    "Biometrics",
    "Push Notifications",
  ];
  var websiteOptions = ["Basic", "Interactive", "E-Commerce"];

  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState("");
  const [service, setService] = useState("");
  const [complexity, setComplexity] = useState("");
  const [users, setUsers] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(0);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const addProject = () => {
    setRows([
      ...rows,
      createData(
        name,
        format(date, "MM/dd/yy"),
        service,
        features.join(", "),
        service === "Website" ? "N/A" : complexity,
        service === "Website" ? "N/A" : platforms.join(", "),
        service === "Website" ? "N/A" : users,
        `$${total}`,
        true
      ),
    ]);
    setDialogOpen(false);
    setName("");
    setDate(new Date());
    setTotal("");
    setService("");
    setComplexity("");
    setUsers("");
    setPlatforms([]);
    setFeatures([]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);

    const rowData = rows.map((row) =>
      Object.values(row).filter((option) => option !== true && option !== false)
    );

    const matches = rowData.map((row) =>
      row.map((option) =>
        option.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );

    const newRows = [...rows];
    matches.map((row, index) =>
      row.includes(true)
        ? (newRows[index].search = true)
        : (newRows[index].search = false)
    );

    setRows(newRows);
    setPage(0);
  };

  const serviceQuestions = (
    <React.Fragment>
      <Grid item style={{ marginTop: matchesSM ? 20 : "5em" }}>
        <Typography variant="h4">Service</Typography>
      </Grid>
      <Grid item>
        <RadioGroup
          aria-label="service"
          name="service"
          value={service}
          onChange={(event) => {
            setService(event.target.value);
            setFeatures([]);
          }}
        >
          <FormControlLabel
            classes={{ label: classes.service }}
            value="Website"
            label="Website"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.service }}
            value="Mobile App"
            label="Mobile App"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.service }}
            value="Custom Software"
            label="Custom Software"
            control={<Radio />}
          />
        </RadioGroup>
      </Grid>
    </React.Fragment>
  );

  const complexityQuestions = (
    <Grid item style={{ marginBottom: matchesSM ? 50 : null }}>
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: matchesSM ? 50 : "5em" }}
      >
        <Grid item>
          <Typography variant="h4">Complexity</Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            aria-label="complexity"
            name="complexity"
            value={complexity}
            onChange={(event) => setComplexity(event.target.value)}
          >
            <FormControlLabel
              disabled={service === "Website"}
              classes={{ label: classes.service }}
              value="Low"
              label="Low"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === "Website"}
              classes={{ label: classes.service }}
              value="Medium"
              label="Medium"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === "Website"}
              classes={{ label: classes.service }}
              value="High"
              label="High"
              control={<Radio />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  );

  const userQuestions = (
    <Grid item style={{ alignSelf: matchesSM ? "center" : "flex-end" }}>
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: matchesSM ? 50 : "5em" }}
      >
        <Grid item>
          <Typography variant="h4">Users</Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            aria-label="users"
            name="users"
            value={users}
            onChange={(event) => setUsers(event.target.value)}
          >
            <FormControlLabel
              disabled={service === "Website"}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="0-10"
              label="0-10"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === "Website"}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="10-100"
              label="10-100"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === "Website"}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="100+"
              label="100+"
              control={<Radio />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        direction="column"
        alignItems={matchesSM ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesSM ? 0 : "5em" }}
        >
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Search Project details or create a new entry"
            value={search}
            onChange={handleSearch}
            style={{
              width: matchesSM ? "25em" : "35em",
              marginLeft: matchesSM ? 0 : "5em",
              marginTop: "2em",
              marginBottom: "2em",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ cursor: "pointer" }}
                  onClick={() => setDialogOpen(true)}
                >
                  <AddIcon color="primary" style={{ fontSize: 30 }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "5em", marginTop: "2em" }}
        >
          <FormGroup row>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              justify={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : "5em" }}
                  control={
                    <Switch
                      checked={websiteChecked}
                      color="secondary"
                      onChange={() => setWebsiteChecked(!websiteChecked)}
                    />
                  }
                  label="Websites"
                  labelPlacement={matchesSM ? "end" : "start"}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : "5em" }}
                  control={
                    <Switch
                      checked={iOSChecked}
                      color="secondary"
                      onChange={() => setiOSChecked(!iOSChecked)}
                    />
                  }
                  label="iOS Apps"
                  labelPlacement={matchesSM ? "end" : "start"}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : "5em" }}
                  control={
                    <Switch
                      checked={androidChecked}
                      color="secondary"
                      onChange={() => setAndroidChecked(!androidChecked)}
                    />
                  }
                  label="Android Apps"
                  labelPlacement={matchesSM ? "end" : "start"}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : "5em" }}
                  control={
                    <Switch
                      checked={softwareChecked}
                      color="secondary"
                      onChange={() => setSoftwareChecked(!softwareChecked)}
                    />
                  }
                  label="Custom Software"
                  labelPlacement={matchesSM ? "end" : "start"}
                />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
        <Grid
          item
          style={{
            marginTop: "5em",
            maxWidth: "100%",
            marginBottom: matchesMD ? "40em" : "35em",
          }}
        >
          <EnhancedTable
            rows={rows}
            setRows={setRows}
            page={page}
            setPage={setPage}
            websiteChecked={websiteChecked}
            iOSChecked={iOSChecked}
            androidChecked={androidChecked}
            softwareChecked={softwareChecked}
          />
        </Grid>
        <Dialog
          fullWidth
          maxWidth="md"
          open={dialogOpen}
          fullScreen={matchesSM}
          onClose={() => setDialogOpen(false)}
        >
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h1" gutterBottom>
                Add a new project
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid
              container
              justify="space-between"
              direction={matchesSM ? "column" : "row"}
            >
              <Grid item>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems={matchesSM ? "center" : undefined}
                  sm
                >
                  <Hidden mdUp>{serviceQuestions}</Hidden>
                  <Hidden mdUp>{userQuestions}</Hidden>
                  <Hidden mdUp>{complexityQuestions}</Hidden>
                  <Grid item>
                    <TextField
                      label="Name"
                      style={{ width: matchesSM ? 250 : undefined }}
                      fullWidth={!matchesSM}
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={matchesSM ? "center" : undefined}
                  >
                    <Hidden smDown>{serviceQuestions}</Hidden>
                    <Grid item style={{ marginTop: matchesSM ? 50 : "5em" }}>
                      <Select
                        labelId="platforms"
                        id="platforms"
                        disabled={service === "Website"}
                        multiple
                        style={{ width: matchesSM ? 250 : "12em" }}
                        MenuProps={{ style: { zIndex: 1302 } }}
                        displayEmpty
                        renderValue={
                          platforms.length > 0 ? undefined : () => "Platforms"
                        }
                        value={platforms}
                        onChange={(event) => setPlatforms(event.target.value)}
                      >
                        {platformOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="column"
                  sm
                  alignItems="center"
                  style={{ marginTop: 16 }}
                >
                  <Grid item style={{ marginTop: matchesSM ? 50 : null }}>
                    <KeyboardDatePicker
                      style={{width: matchesSM ? 250 : undefined}}
                      format="MM/dd/yyyy"
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </Grid>
                  <Hidden smDown>{complexityQuestions}</Hidden>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="column"
                  sm
                  alignItems={matchesSM ? "center" : undefined}
                >
                  <Grid item style={{ marginTop: matchesSM ? 50 : null }}>
                    <TextField
                      style={{ width: matchesSM ? 250 : undefined }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      value={total}
                      id="total"
                      label="Total"
                      onChange={(event) => setTotal(event.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ alignSelf: matchesSM ? "center" : "flex-end" }}
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      style={{ marginTop: matchesSM ? 50 : "5em" }}
                    >
                      <Hidden smDown>{userQuestions}</Hidden>
                    </Grid>
                  </Grid>
                  <Grid item style={{ marginTop: matchesSM ? 50 : "5em" }}>
                    <Select
                      labelId="features"
                      style={{ width: matchesSM ? 250 : "12em" }}
                      MenuProps={{ style: { zIndex: 1302 } }}
                      id="features"
                      multiple
                      displayEmpty
                      renderValue={
                        features.length > 0 ? undefined : () => "Features"
                      }
                      value={features}
                      onChange={(event) => setFeatures(event.target.value)}
                    >
                      {service === "Website"
                        ? (featureOptions = websiteOptions)
                        : null}
                      {featureOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: "3em" }}>
              <Grid item>
                <Button
                  onClick={() => setDialogOpen(false)}
                  color="primary"
                  style={{ fontWeight: 300, marginRight: "1em" }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={addProject}
                  style={{ marginLeft: "1em" }}
                  disabled={
                    service === "Website"
                      ? name.length === 0 ||
                        total.length === 0 ||
                        features.length === 0 ||
                        features.length > 1
                      : name.length === 0 ||
                        total.length === 0 ||
                        features.length === 0 ||
                        users.length === 0 ||
                        complexity.length === 0 ||
                        platforms.length === 0 ||
                        service.length === 0
                  }
                >
                  Add Project +
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
