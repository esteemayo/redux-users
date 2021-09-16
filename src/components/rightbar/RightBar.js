import { ArrowDropDown } from '@material-ui/icons';

import Recommendation from '../recommendation/Recommendation';
import './RightBar.css';

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <Recommendation type='user' />
        <Recommendation type='popular' />
        <Recommendation type='editor' />
        <button className='rightButton'>
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default RightBar;
