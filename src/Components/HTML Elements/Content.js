import { useState } from "react";

function Content() {
  // use state
  const [value, setValue] = useState("default Value");

  // click function
  const handleClick = (e, name) => {
    console.log(name);
    console.log(e);
    setValue("changed Value");
  };

  return (
    <div className="content">
      <p>body content</p>
      {/* button that sends event and an arguement */}
      <button
        onClick={(e) => {
          handleClick(e.target, "clickMe");
        }}
      >
        Click me
      </button>

      <p>{value}</p>
    </div>
  );
}

export default Content;
