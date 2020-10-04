import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyPlan: [
        {
          id: "WEEKLY PLAN",
          day: "Monday",
          day2: "Tuesday",
          day3: "Wednesday",
          day4: "Thursday",
          day5: "Friday",
          day6: "Saturday",
          day7: "Sunday",
        },
      ],
      weeklyMeals: [
        {
          meal: "Breakfast",
          option: "+",
          option2: "+",
          option3: "+",
          option4: "+",
          option5: "+",
          option6: "+",
          option7: "+",
        },
        {
          meal: "Lunch ",
          option: "+",
          option2: "+",
          option3: "+",
          option4: "+",
          option5: "+",
          option6: "+",
          option7: "+",
        },
        {
          meal: "Dinner",
          option: "+",
          option2: "+",
          option3: "+",
          option4: "+",
          option5: "+",
          option6: "+",
          option7: "+",
        },
        {
          meal: "Snacks",
          option: "+",
          option2: "+",
          option3: "+",
          option4: "+",
          option5: "+",
          option6: "+",
          option7: "+",
        },
      ],
    };
  }

  renderWeeklyPlan() {
    return this.state.weeklyPlan.map((plan, index) => {
      const { id, day, day2, day3, day4, day5, day6, day7 } = plan;
      return (
        <tr key={index} id="days">
          <td id="blank">{id}</td>
          <td id="monday">{day}</td>
          <td id="tuesday">{day2}</td>
          <td id="wednesday">{day3}</td>
          <td id="thursday">{day4}</td>
          <td id="friday"> {day5}</td>
          <td id="saturday">{day6}</td>
          <td id="sunday">{day7}</td>
        </tr>
      );
    });
  }

  renderWeeklyMeals() {
    return this.state.weeklyMeals.map((yemek, index) => {
      const {
        meal,
        option,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
      } = yemek;
      return (
        <tr key={index} id="options">
          <td id="meals">{meal}</td>
          <td id="monday">{option}</td>
          <td id="tuesday">{option2}</td>
          <td id="wednesday">{option3}</td>
          <td id="thursday">{option4}</td>
          <td id="friday">{option5}</td>
          <td id="saturday">{option6}</td>
          <td id="sunday">{option7}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>WEEKLY DIET PLANNER</h1>
        <table id="dietPlanner">
          <tbody>{this.renderWeeklyPlan()}</tbody>
          <tbody>{this.renderWeeklyMeals()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
