import { FormType } from '../Types/FormType'

export const addFormCount = (formCount) => {
  return {
    type: FormType.FORMCOUNT,
    payload: formCount,
  }
}

export const addFormValue = (formValue) => {
  return {
    type: FormType.FORMVALUE,
    payload: formValue,
  }
}

export const addFormAll = (formAll) => {
  return {
    type: FormType.FORMALL,
    payload: formAll,
  }
}
