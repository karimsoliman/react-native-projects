import _ from 'lodash';
import React, {Component} from 'react';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {Card, CardSection, CustomButton, Confirm} from './common';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state={showModal: false};

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPressed() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPressed() {
    const {phone, shift} = this.props;

    Communications.text(phone, `your upcoming shift will be on ${shift}`);
  }

  onDecline() {
    this.setState({showModal: false});
  }

  onAccept() {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <CustomButton buttonText="Save" whenPressed={this.onButtonPressed.bind(this)} />
        </CardSection>

        <CardSection>
          <CustomButton buttonText="Text Schedule" whenPressed={this.onTextPressed.bind(this)} />
        </CardSection>

        <CardSection>
          <CustomButton buttonText="Fire" whenPressed={() => this.setState({showModal: !this.state.showModal})} />
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee ?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToprops = (state) => {
  const {name, phone, shift} = state.employee;
  return {name, phone, shift};
};

export default connect(mapStateToprops, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
