import React from 'react';
import {nanoid} from "nanoid";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';

export default function TaskHookForm(props) {
  const {kisiler, submitFn} = props;
  const {register, handleSubmit, formState: {errors, isValid}} 
    = useForm ({defaultValues: {id: nanoid(5), title: "", description: "", people: []}, mode: "onChange"});

  const onSubmit = (data, e) => {
    submitFn({...data, status: "yapılacak"});
    e.target.reset()
  };

  const validateTitle = (value) => {
    return value.trim().length >= 3 || "Görev başlığı en az 3 karakter olmalı"
  }

  const validateDescription = (value) => {
    return value.trim().length >= 10 || "Görev açıklaması en az 10 karakter olmalı"
  }

  const validatePeople = (value) => {
    return value.length >= 1 && value.length <= 3 || "Lütfen en az 1, en fazla 3 kişi seçiniz."
  }
  
  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="input-label">
          Başlık <br /> </label>
        <input
          className="input-text"
          type='text'
          {...register("title", { validate: validateTitle })} />
        <p className='input-error'>{errors.title?.message}</p>
        <label className="input-label">
          Açıklama <br /> </label>
        <textarea
          className="input-textarea"
          rows="3"
          {...register("description", { validate: validateDescription })} ></textarea>
        <p className='input-error'>{errors.description?.message}</p>
        <label className="input-label">
          İnsanlar <br /> </label>
        {kisiler.map((p) => (
          <label className='input-checkBox' key={p}>
            <input type='checkbox' {...register("people", { validate: validatePeople })} className='task-insanlar' />
            {p}
          </label>
        ))}
        <p className='input-error'>{errors.people?.message}</p>
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid} >
          Kaydet
        </button>
      </form>
    </>
  )
}
