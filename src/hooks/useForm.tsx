import { FormEvent, useState } from "react";

interface FormValue {
  title: string;
  desc: string;
}
const initValue = {
  title: "",
  desc: "",
};

const useForm = (
  init = initValue
): [value: FormValue, handleChange: (evt: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void , reset: () => void] => {
  const [value, setValue] = useState(init);

  const reset = () => {
    setValue(init);
  };

  const handleChange = (evt: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue({
      ...value,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };
  return [value, handleChange, reset];
};
//, , reset
export default useForm;
