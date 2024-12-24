import { useForm } from "react-hook-form"
import { Input } from "./Input"
import arrowIcon from '../../assets/images/icon-arrow.svg'
import { AgeOutput } from "./AgeOutput"

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("day", { required: "This field is required" })}
        label="DAY"
        placeholder="DD"
      ></Input>
      
      <Input
        register={register("month", { required: "This field is required" })}
        label="MONTH"
        placeholder="MM"
      ></Input>

      <Input
        register={register("year", { required: "This field is required" })}
        label="YEAR"
        placeholder="YYYY"
      ></Input>

      <input type="submit" />

      <div className="form__img">
        <img src={arrowIcon} alt="icon-arrow" />
      </div>

    </form>
    <AgeOutput title='years'></AgeOutput>
    <AgeOutput title='months'></AgeOutput>
    <AgeOutput title='days'></AgeOutput>
    </>
  )
}
