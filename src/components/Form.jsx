import { set, useForm } from "react-hook-form"
import { Input } from "./Input"
import arrowIcon from "../../assets/images/icon-arrow.svg"
import { AgeOutput } from "./AgeOutput"
import { useState } from "react"

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [years, setYears] = useState("- -")
  const [months, setMonths] = useState("- -")
  const [days, setDays] = useState("- -")

  const onSubmit = (data) => {
    const dateString = data.year + "-" + data.month + "-" + data.day
    console.log(dateString)
    const date = new Date(dateString)
    const currentData = new Date()
    let diff = currentData - date
    const years = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.25))
    setYears(years)
    diff -= years * (1000 * 60 * 60 * 24 * 365.25)
    const months = Math.trunc(diff / (1000 * 60 * 60 * 24 * 30.44))
    setMonths(months)
    diff -= months * (1000 * 60 * 60 * 24 * 30.44)
    const days = Math.trunc(diff / (1000 * 60 * 60 * 24))
    setDays(days)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register("day", {
            required: "This field is required",
            min: { value: 1, message: "Must be a valid day" },
            max: { value: 31, message: "Must be a valid day" },
            // Checking For Leap Years
            validate: (value) => {
              if (watch("year") != "" && watch("month") != "") {
                const dateString =
                  watch("year") + "-" + watch("month") + "-" + value
                const date = new Date(dateString)
                const monthFromDateAPI = date.getMonth() + 1
                const monthFromForm = +watch("month")
                if (monthFromDateAPI != monthFromForm) {
                  return "Must be a valid date"
                }
              }
              return true
            },
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
      <AgeOutput title="years">{years}</AgeOutput>
      <AgeOutput title="months">{months}</AgeOutput>
      <AgeOutput title="days">{days}</AgeOutput>
    </>
  )
}
