"use client";

import "../lab2/tailwind/index.css";
import ArrayStateVariables from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import ContextExamples from "./context/ContextExamples";
import CounterBroken from "./CounterBroken";
import DateStateVariables from "./DateStateVariables";
import Effect from "./Effect";
import ObjectStateVariables from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ProfileForm from "./profile/ProfileForm";
import PropDrilling from "./PropDrilling";
import StringStateVariables from "./StringStatevariables";
import UrlEncoding from "./UrlEncoding";
import WindowSizeDemo from "./hooks/WindowSizeDemo";
import ToggleDemo from "./hooks/ToggleDemo";
import LocalStorageDemo from "./hooks/LocalStorageDemo";
import HookProfileForm from "./hooks/HookProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = (myName: string) => {
    alert(myName);
  };
  const sayOther = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello World!"
        myName="Ethan"
        theFunction={sayHello}
        myFunction={sayMyName}
        theOtherFunction={sayOther}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariables />
      <ObjectStateVariables />
      <ArrayStateVariables />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
      <WindowSizeDemo />
      <ToggleDemo />
      <LocalStorageDemo />
      <HookProfileForm />
    </div>
  );
}
