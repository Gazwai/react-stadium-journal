import React from "react"
import InfoCard from "./components/InfoCard"
import data from "./data"


export default function Main() {
    const cards = data.map(item => {
      return (
            <InfoCard
                key={item.id}
                item={item}
            />
      )
    })

    return(
        <main>
          {cards}
        </main>
    )
}
