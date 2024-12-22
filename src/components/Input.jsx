export function Input({ label, register, placeholder }) {
  return (
      <div className="input">
          <label>{label}</label>
          <input type="number" register={register} placeholder={placeholder}/>
      </div>
  )
}
