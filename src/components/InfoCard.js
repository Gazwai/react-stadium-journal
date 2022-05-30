import React from "react"

export default function InfoCard(props) {
  console.log(props)
    return(
        <section>
          <div className="card">
            <div className="card--img">
              <img src={props.item.imageUrl} alt=""/>
            </div>
            <div className="card--details">
              <a href={props.item.googleMapsUrl}>
                <i className="fa-solid fa-location-dot"></i>
              </a>
              <p className="card--country">{props.item.location}</p>
              <a className="card--link" href={props.item.googleMapsUrl}>View on google maps</a>
              <h1 className="card--title">{props.item.title}</h1>
              <strong className="card--capacity">{`capacity: ${props.item.capacity}`}</strong>
              <p className="card--description">{props.item.description}</p>
            </div>
          </div>
          <hr/>
        </section>
    )
}
