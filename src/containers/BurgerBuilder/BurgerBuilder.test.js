import React from "react";
import { BurgerBuilder } from "./BurgerBuilder";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />); // this is a trick for async preloading of props (ingredients are loading from server in this case)
  });

  it("should render <BuildControls /> when receiving ingredinets", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});