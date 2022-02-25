
import "./menu-item.styling.scss"

const MenuItem = ({title, imageurl}) => (
    <div style = {{
        backgroundImage: `url(${imageurl})`
    }}
    
    className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;