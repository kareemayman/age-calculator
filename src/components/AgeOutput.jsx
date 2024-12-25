export function AgeOutput({ title, children }) {
  return (
    <h1 className="age-output poppins-extrabold-italic">
      <span>{children}</span> {title}
    </h1>
  )
}
