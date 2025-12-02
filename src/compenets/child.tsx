import { useState } from "react"

const Child = () => {
     const [ counter,setCounter] = useState<number>(1)
  return (
    <p>
          <p> 
    counter: {counter}
  </p>
<button type="button" onClick={() => setCounter(counter+1)}>increament</button>
  <button type="button" onClick={() => setCounter(counter-1)}>dincreament</button>
  </p>
  )
}

export default Child
