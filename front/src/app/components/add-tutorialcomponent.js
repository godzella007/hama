import React, { Component } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../slices/tutorials";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRules = this.onChangeRules.bind(this);
    this.onChangeDate_début = this.onChangeDate_début.bind(this);
    this.onChangeDate_fin = this.onChangeDate_fin.bind(this);
    this.onChangeNomEntriprise = this.onChangeNomEntriprise.bind(this);
    this.onChangeNumbre_Equipe = this.onChangeNumbre_Equipe.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      Rules: "",
      NomEntriprise:"",
      Numbre_Equipe:"",
      Date_début: "",
      Date_fin:"",
      published: false,
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeRules(e) {
    this.setState({
      Rules : e.target.value,
    });
  }
  onChangeNomEntriprise(e){
    this.setState({
      NomEntriprise :e.target.value,
    });
  }
  onChangeNumbre_Equipe(e){
    this.setState({
     Numbre_Equipe: e.target.value, 
    });
  }
  onChangeDate_début(e) {
    this.setState({
      Date_début: e.target.value,
    });
  }
  onChangeDate_fin(e) {
    this.setState({
      Date_fin: e.target.value,
    });
  }
  saveTutorial() {
    const { title, description,Rules,Date_début,Date_fin,NomEntriprise,Numbre_Equipe } = this.state;

    this.props
      .createTutorial({ title, description,Rules,Date_début,Date_fin,NomEntriprise,Numbre_Equipe})
      .unwrap()
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          Rules: data.Rules,
          Date_début: data.Date_début,
          Date_fin: data.Date_fin,
          NomEntriprise:data.NomEntriprise,
          Numbre_Equipe:data.Numbre_Equipe,
          published: data.published,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      Rules: "",
      Date_début: "",
      Date_fin:"",
      Numbre_Equipe:"",
      NomEntriprise:"",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>projet ajouté avec succès</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            
            <div className="form-group">
              <label htmlFor="NomEntriprise">l'Entriprise </label>
              <input
                type="text"
                className="form-control"
                id="NomEntriprise"
                required
                value={this.state.NomEntriprise}
                onChange={this.onChangeNomEntriprise}
                name="NomEntriprise"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title de Projet </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>
   
            <div className="form-group">
              <label htmlFor="Numbre_Equipe">Numbre_Equipe </label>
              <input
                type="text"
                className="form-control"
                id="Numbre_Equipe"
                required
                value={this.state.Numbre_Equipe}
                onChange={this.onChangeNumbre_Equipe}
                name="Numbre_Equipe"
              />
            </div>
   
            
            <div className="form-group">
              <label htmlFor="description">Description de Projet</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Rules</label>
              <input
                type="text"
                className="form-control"
                id="rules"
                required
                value={this.state.Rules}
                onChange={this.onChangeRules}
                name="rules"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Date_début</label>
              <input
                type="Date"
                className="form-control"
                id="Date_début"
                required
                value={this.state.Date_début}
                onChange={this.onChangeDate_début}
                name="Date_début"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Date_fin</label>
              <input
                type="Date"
                className="form-control"
                id="Date_fin"
                required
                value={this.state.Date_fin}
                onChange={this.onChangeDate_fin}
                name="Date_fin"
              />
            </div>
            

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTutorial })(AddTutorial);
