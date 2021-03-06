import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

//Looks for icon sprite in bundle.js or something
require.context("../../icons", true, /\.svg$/);

export class Icon extends Component {
	render() {
		return (
			<svg className={`c-icon ${this.props.iconclass}`}>
				<use xlinkHref={`./icons.svg#${this.props.iconname}`} />
			</svg>
		);
	}
}

Icon.propTypes = {
	iconclass: PropTypes.string,
	iconname: PropTypes.string.isRequired
};

Icon.defaultProps = {
	iconclass: "c-icon",
	iconname: "search"
};
