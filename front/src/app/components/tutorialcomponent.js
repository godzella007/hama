import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTutorial, deleteTutorial } from "../slices/tutorials";
import TutorialDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';


class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeTutorial = this.removeTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status,
    };

    this.props
      .updateTutorial({ id: this.state.currentTutorial.id, data })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateTutorial({ id: this.state.currentTutorial.id, data: this.state.currentTutorial })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The tutorial was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTutorial() {
    this.props
      .deleteTutorial({ id: this.state.currentTutorial.id })
      .then(() => {
        this.props.router.navigate('/tutorials');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
      
      <div className="content-body">
        {currentTutorial ? (
          <div className="edit-form">
             <div className="card profile-card card-bx m-b30">
            <h4>Tutorial</h4>
            <form>
            <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="title">l'Entriprise</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.NomEntriprise}
                  onChange={this.onChangeNomEntriprise}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Title de Projet</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.title}
                  onChange={this.onChangetitle}
                />
              </div>
              </div>
              <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="Numbre_Equipe">Numbre_Equipe</label>
                <input
                  type="text"
                  className="form-control"
                  id="Numbre_Equipe"
                  value={currentTutorial.Numbre_Equipe}
                  onChange={this.onChangeNumbre_Equipe}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="NomEntriprise">Description de Projet</label>
                <input
                  type="text"
                  className="form-control"
                  id="NomEntriprise"
                  value={currentTutorial.description}
                  onChange={this.onChangedescription}
                />
              </div>
              </div>
              <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="Date_début">Date_début</label>
                <input
                  type="text"
                  className="form-control"
                  id="Date_début"
                  value={currentTutorial.Date_début}
                  onChange={this.onChangeDate_début}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor=" Date_fin"> Date_fin</label>
                <input
                  type="text"
                  className="form-control"
                  id=" Date_fin"
                  value={currentTutorial.Date_fin}
                  onChange={this.onChangeDate_fin}
                />
              </div>
              </div>
              <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="Rules"> Rules</label>
                <input
                  type="text"
                  className="form-control"
                  id="Rules"
                  value={currentTutorial.Rules}
                  onChange={this.onChangeRules}
                />
              </div>
              </div>
              <div className="form-group col-md-6">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
              class="btn btn-warning"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish

              </button>
            ) : (

              <button
              class="btn btn-primary"
                onClick={() => this.updateStatus(true)}
              
              >
                Publish
              </button>
            )}

            <button
            class="btn btn-danger"
              onClick={this.removeTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              class="btn btn-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            </div></div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div></div>
    );
  }
}

export default connect(null, { updateTutorial, deleteTutorial })(withRouter(Tutorial));
