import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { getUser } from "../../ducks/userReducer";
require("dotenv").config();
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // componentDidMount() {
  //   this.props.getUser();
  // }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" color="primary">
          <NavbarBrand href="/" className="mr-auto">
            Dzone
          </NavbarBrand>

          <Container>
            <Row>
              <Col>
                Welcome:
                {this.props.username}
              </Col>
            </Row>
          </Container>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Explore
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <Link to="/" action="replace">
                        Home
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/ForumRoom" action="replace">
                        Forum
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/createComment" action="replace">
                        About
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/createComment" action="replace">
                        Entertainment
                      </Link>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <Link to="/UserRegistration" action="replace">
                        Profile
                      </Link>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    {/* <Link to="/"> */}
                    <div className="logout">
                      <a href="http://danspace.auth0.com/v2/logout">Logout</a>
                    </div>
                    {/* </Link> */}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.userReducer;
};

export default connect(
  mapStateToProps,
  { getUser }
)(Header);
