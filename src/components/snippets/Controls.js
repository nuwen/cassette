import React from "react";
import SearchForm from "../routes/Search/SearchForm";
import { CSSTransition } from "react-transition-group";
class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false,
      formVisible: false
    };

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(event) {
    event.preventDefault();
    this.setState({
      addClicked: !this.state.addClicked
    });
  }
  render() {
    return (
      <div className="controls">
        <div className="controls__buttons">
          <button onClick={this.handleAddClick}>
            {!this.state.addClicked ? "Add Song" : "Close"}
          </button>
          <button>Share</button>
        </div>
        <CSSTransition
          in={this.state.addClicked}
          unmountOnExit
          timeout={300}
          classNames="searchForm"
          onEnter={() => this.setState({ formVisible: true })}
          onExit={() => this.setState({ formVisible: false })}
        >
          <SearchForm accessToken={this.props.accessToken} />
        </CSSTransition>
      </div>
    );
  }
}

export default Controls;
