import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addFile, clearDisplay } from './actions'

var HeaderImpl = React.createClass({
  setupInputNode(node) {
    // Hack because react's <input> doesn't support this yet
    node.setAttribute("webkitdirectory", "");
    node.setAttribute("mozdirectory", "");

    this._inputNode = node;
  },

  render() {
    return (
      <div>
        <input ref={this.setupInputNode} type="file" name="selector-box"/>
        <button onClick={this.goButtonClicked}>Go!</button>
      </div>
    );
  },

  goButtonClicked() {
    if (this._inputNode) {
      this.props.onFilesPicked();
      var files = this._inputNode.files;
      for (var i = 0; i < files.length; i++) {
        this.props.onEachFile(files[i]);
      }
    }
  }
});

var Header = connect(
  () => { return {} },
  (dispatch) => {
    return {
      onEachFile: (file) => {
        dispatch(addFile(file));
      },
      onFilesPicked: () => {
        dispatch(clearDisplay());
      }
    }
  }
)(HeaderImpl)

module.exports = Header;
