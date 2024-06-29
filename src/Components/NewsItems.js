import React from 'react'

const NewsItems = (props) => {
    let { imageUrl, title, desc, date, source, url } = props
    return (
        <div>
            <div className="card" style={{ width: '25rem' }}>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}
                    <span class="visually-hidden">unread messages</span>
                </span>
                <img src={!imageUrl ? "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p class="card-text"><small class="text-body-secondary">{new Date(date).toGMTString()}</small></p>
                    <a href={url} target='_blanck' className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItems; 
