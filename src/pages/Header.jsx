import '../index.css'
import { Link } from 'react-router-dom'
export const Header = () => {
    return(
        <div className="header">
            <Link to='/'>
                <div className='urguuLogo'></div>
            </Link>
            <Link to='/'>
                <div className='jumpLink'>Эхлэл</div>
            </Link>
            {/* <Link> */}
                <div className='jumpLink'>Тун удахгүй</div>
            {/* </Link>
            <Link> */}
                <div className='jumpLink'>Захиалага</div>
            {/* </Link>
            <Link> */}
                <div className='jumpLink'>ҮНЭ УРАМШУУЛАЛ</div>
            {/* </Link> */}
        </div>
    )
}