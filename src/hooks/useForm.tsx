import { FormEvent, useState } from "react";
interface FormValue {
  title: string;
  desc: string;
}
type Handle = FormEvent<HTMLInputElement | HTMLTextAreaElement>


const useForm = (init:FormValue): [value: FormValue, handleChange: (evt:Handle) => void , reset: () => void] => {
  const [value, setValue] = useState(init);

  const reset = () => {
    setValue(init);
  };

  const handleChange = (evt:Handle) => {
    setValue({
      ...value,
      [evt.currentTarget.name]: evt.currentTarget.value,
    })
  }
  return [value, handleChange, reset];
};
export default useForm;
