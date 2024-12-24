export function Input({ label, register, placeholder }) {
  return (
      <div className="input">
          <label className="poppins-bold">{label}</label>
          <input type="number" register={register} placeholder={placeholder}/>
      </div>
  )
}