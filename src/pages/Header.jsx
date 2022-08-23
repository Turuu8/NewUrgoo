import '../index.css'
import { Link } from 'react-router-dom'
export const Header = () => {
    return(
        <div className="header">
            <Link to='/'>
                <div className='urguuLogo'></div>
            </Link>
            <Link to='/'>
                <div>Эхлэл</div>
            </Link>
            {/* <Link> */}
                <div>Тун удахгүй</div>
            {/* </Link>
            <Link> */}
                <div>Захиалага</div>
            {/* </Link>
            <Link> */}
                <div>ҮНЭ УРАМШУУЛАЛ</div>
            {/* </Link> */}
        </div>
    )
}