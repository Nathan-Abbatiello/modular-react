import { useState } from "react";
function Map() {
  // use state
  const [values, setValues] = useState([
    { name: "bob", age: 30, id: 1 },
    { name: "fred", age: 50, id: 2 },
  ]);

  return (
    <div className="map">
      {values.map((value) => (
        <div className="person" key={value.id}>
          <p>{value.name}</p>
          <p>{value.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Map;
