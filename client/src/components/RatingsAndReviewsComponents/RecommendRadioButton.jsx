import React, { Component } from 'react';

class RecommendRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'No',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRecommendState(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Do you recommend this product?</p>

        <div>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                name="recommend"
                checked={this.state.value === 'Yes'}
                onChange={this.handleChange}
              />
              Yes
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                value="No"
                name="recommend"
                checked={this.state.value === 'No'}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default RecommendRadioButton;
