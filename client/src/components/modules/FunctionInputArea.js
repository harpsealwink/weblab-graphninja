import React, {useState} from 'react';
import GraphCard from './GraphCard';
import FunctionInput from './FunctionInput';

const FunctionInputArea = (props) => {
    const [fields, setFields] = useState([{ value: null }]);
    const [fieldLabels, setFieldLabels] = useState(props.fuction);
    

    function handleChange(i, event) {
      const values = [...fields];
      values[i].value = event.target.value;
      setFields(values);
    //   console.log(fieldLabels);
      console.log(fields);
    }
  
    function handleAdd() {
      const values = [...fields];
      values.push({ value: null });
      setFields(values);
    }
  
    function handleRemove(i) {
      const values = [...fields];
      values.splice(i, 1);
      setFields(values);
    }
  
    return (
      <div className="FunctionInputArea">
  
        <button type="button" onClick={() => handleAdd()}>
          +
        </button>
  
        {fields.map((field, idx) => {
          return (
            <div>
              <input
                type="text"
                placeholder="Enter text"
                value={field.value || ""}
                onChange={e => handleChange(idx, e)}
              />
              {/* <button type="button" onClick={() => handleRemove(idx)}>
                X
              </button> */}
            </div>
          );
        })}
      </div>
    );
  }

export default FunctionInputArea;