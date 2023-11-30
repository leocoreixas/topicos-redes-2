
import LoaderImg from '../../../../assets/images/cm-loader.png';

import Spinner from '../Spinner';

const ScreenLoader = () => {
    return (
        <div className='screen-loader'>
            <div className="d-flex flex-column align-items-center pb-xlg">
                <img src={LoaderImg} alt="Casimiro Loader" />
                <div className="mt-md">
                    <Spinner size={32} />
                </div>
            </div>
        </div>
    )
}

export default ScreenLoader