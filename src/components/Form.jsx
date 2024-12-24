import { useForm } from "react-hook-form"
import { Input } from "./Input"
import arrowIcon from "../../assets/images/icon-arrow.svg"
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
          register={register("day", {
            required: "This field is required",
            min: { value: 1, message: "Must be a valid day" },
            max: { value: 31, message: "Must be a valid day" },
          })}
          label="DAY"
          placeholder="DD"
          errors={errors}
        ></Input>

        <Input
          register={register("month", {
            required: "This field is required",
            min: { value: 1, message: "Must be a valid month" },
            max: { value: 12, message: "Must be a valid month" },
          })}
          label="MONTH"
          placeholder="MM"
          errors={errors}
        ></Input>

        <Input
          register={register("year", {
            required: "This field is required",
            validate: (value) => {
              const currentYear = new Date().getFullYear()
              if (value > currentYear) {
                return "Must be in the past"
              } else if (value == currentYear) {
                const currentMonth = new Date().getMonth() + 1
                const currentDay = new Date().getDate()

                if (watch("month") > currentMonth) {
                  return "Must be in the past"
                } else if (watch("month") == currentMonth) {
                  if (watch("day") > currentDay) {
                    return "Must be in the past"
                  }
                }
              }
              return true
            },
          })}
          label="YEAR"
          placeholder="YYYY"
          errors={errors}
        ></Input>

        <input type="submit" />

        <div className="form__img">
          <img src={arrowIcon} alt="icon-arrow" />
        </div>
      </form>
      <AgeOutput title="years"></AgeOutput>
      <AgeOutput title="months"></AgeOutput>
      <AgeOutput title="days"></AgeOutput>
    </>
  )
}
