import  { useState } from "react";
interface Form {
  title:string
  desc:string
}
const useForm = (init = {}) => {
  const [value, setValue] = useState(init);

  const reset = () => {
    setValue(init);
  };

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };
  return [value, handleChange, reset];
};

export default useForm;
