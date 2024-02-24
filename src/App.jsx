import React, { useState } from 'react';

const city = ['mumbai', 'pune', 'kolkata'];
const code = [
  {
    name: 'mumbai',
    code: ['m1', 'm2', 'm3'],
  },
  {
    name: 'pune',
    code: ['p1', 'p2', 'p3'],
  },
  {
    name: 'kolkata',
    code: ['k1', 'k2', 'k3'],
  },
];
const App = () => {
  const [cities, setCities] = useState(city);
  const [citiesCode, setCitiesCode] = useState(code);
  const [selectCity, setSelectCity] = useState('');
  const cityHandlar = (e) => {
    setSelectCity(e.target.value);
  };

  const selectedCode =
    citiesCode.find((item) => item.name === selectCity)?.code || [];
  console.log(selectedCode);

  return (
    <div>
      <select onChange={cityHandlar}>
        <option defaultValue>select value </option>
        {cities.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      {selectCity && (
        <select>
          {selectedCode.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default App;
