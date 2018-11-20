import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { PageHeader } from "./PageHeader";

let stories = storiesOf("Molecules/Text/PageHeader", module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add("Default", () => <PageHeader />);
