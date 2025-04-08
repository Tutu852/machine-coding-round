import { useId } from "react"


const checkbox = () => {
  //this is a hook what is acceptable for accross all the files and  it create a random id.
  const id = useId();
  return (
    <div>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>Accept Terms</label>
    </div>
  )
}

export default checkbox