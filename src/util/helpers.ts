import { ChangeEvent } from "react";

export const isAuthenticated = () => localStorage.getItem('auth') !== null;
  
export const onChange = (setValues: Function, event: ChangeEvent<HTMLInputElement>) => {
  setValues((oldValues: any) => ({...oldValues, [event.target.name]: event.target.value}));
}
  
export const onChangeHandleErrors = (setValues: Function, setErrors: Function, event: ChangeEvent<HTMLInputElement>) => {
  setValues((oldValues: any) => ({...oldValues, [event.target.name]: event.target.value}));
  setErrors((oldErrors: any) => {
    delete oldErrors[event.target.name]

    return oldErrors
  });
}
  
export const onChangeSelectHandleErrors = (setValues: Function, setErrors: Function, value: any, name: string) => {
  console.log('value', value)
  setValues((oldValues: any) => ({...oldValues, [name]: value}));
  setErrors((oldErrors: any) => {
    if (oldErrors[name]) {
      delete oldErrors[name]
    }

    return oldErrors
  });
}