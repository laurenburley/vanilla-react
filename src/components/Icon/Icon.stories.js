import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Icon } from "./Icon";

let stories = storiesOf("Atoms/Icons/Icon", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <Icon />);
