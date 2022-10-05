import Image from "next/image"

function CarsPage() {
  return (
    <div>
      {['1', '2', '3', '4', '5'].map(path => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt='car' width='380' height='420' />
          </div>
        )
      })}
    </div>
  )
}

export default CarsPage