export function Input({ label, register, placeholder, errors }) {
  return (
      <div className="input">
          <label className="poppins-bold">{label}</label>
          <input type="number" {...register} placeholder={placeholder}/>
          {errors[register.name] && <span className="input__error">{errors[register.name].message}</span>}
      </div>
  )
}
