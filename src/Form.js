import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import "./App.css";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      age: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };
  prev = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  handleChange = value => {
    this.setState({ age: value });
  };
  render() {
    return (
      <div className="App">
        {this.state.currentStep === 0 && (
          <header className="App-header">
            <p>Magnesium Quiz</p>
            <img src="https://s3-us-west-1.amazonaws.com/tryinteract-uploads/5d49a6d032e0cd0014b6f8fe/_62fc01a0-b883-11e9-9447-355d3725c9be.jpg" />
            <p>
              Magnesium serves many functions in the human body.
              <ul style={{ textAlign: "left" }}>
                It’s important for:
                <li>protein synthesis </li>
                <li>healthy bone formation </li>
                <li> regulating blood pressure </li>
                <li>
                  maintaining heart health energy production nerve function
                </li>
                <li> protein synthesis </li>
                <li> blood sugar control </li>
              </ul>
            </p>
            <Button
              style={{ backgroundColor: "white", marginTop: 10 }}
              onClick={() => this.next()}
            >
              Get Started!
            </Button>
          </header>
        )}
        {this.state.currentStep === 1 && (
          <header className="App-header">
            <FormControl component="fieldset">
              <FormLabel
                style={{ fontSize: 20, color: "white", marginBottom: 12 }}
              >
                Are you a man or woman?
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="gilad"
                    />
                  }
                  label="Man"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="Woman"
                />
              </FormGroup>
            </FormControl>
          </header>
        )}
        {this.state.currentStep === 2 && (
          <header className="App-header">
            <FormControl component="fieldset">
              <FormLabel
                style={{ fontSize: 20, color: "white", marginBottom: 12 }}
              >
                What is your age?
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="gilad"
                    />
                  }
                  label="14-19"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="19-30"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="antoine"
                    />
                  }
                  label="31-60"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="antoine"
                    />
                  }
                  label="60+"
                />
              </FormGroup>
            </FormControl>
          </header>
        )}
        {this.state.currentStep === 2 && (
          <header className="App-header">
            <FormControl component="fieldset">
              <FormLabel
                style={{ fontSize: 20, color: "white", marginBottom: 12 }}
              >
                Do you have any of the existing conditions?
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="High Blood Pressure"
                    />
                  }
                  label="High Blood Pressure"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="Type 2 Diabetes"
                />
              </FormGroup>
            </FormControl>
          </header>
        )}
        {this.state.currentStep === 3 && (
          <header className="App-header">
            <FormControl component="fieldset">
              <FormLabel
                style={{ fontSize: 20, color: "white", marginBottom: 12 }}
              >
                This is the best Magnesium supplement for you!
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="High Blood Pressure"
                    />
                  }
                  label="Magnesium Gluconate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="Magnesium Oxide"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="Magnesium Citrate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      onChange={() => {
                        this.handleChange("gilad");
                        this.next();
                      }}
                      value="jason"
                    />
                  }
                  label="Magnesium Chloride
"
                />
              </FormGroup>
            </FormControl>
          </header>
        )}
      </div>
    );
  }
}

export default Form;
