import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardSection, CustomButton} from './common';
import {employeeUpdate, employeeCreate, clearForm} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  componentWillMount() {
    this.props.clearForm();
  }

  onButtonPressed() {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Saturday'});
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <CustomButton buttonText="Create" whenPressed={this.onButtonPressed.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToprops = (state) => {
  const {name, phone, shift} = state.employee;
  return {name, phone, shift};
};

export default connect(mapStateToprops, {employeeUpdate, employeeCreate, clearForm})(EmployeeCreate);
