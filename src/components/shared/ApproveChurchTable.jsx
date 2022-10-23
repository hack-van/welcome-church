import * as React from 'react';
import ApproveChurch, { APPROVE_CHURCH_SEND_PRIVATE_INFO } from './ApproveChurch';

/**
 * @param {string} classNameModfier the name to append to the classes
 * @param {array[ChurchData]} churchesData
 */
const ApproveChurchTable = ({ classNameModfier, churchesData }) => {

  if (churchesData.length === 0) {
    return '';
  }

  return (
    <div className={`approve-church-tb approved-church--${classNameModfier}`}>
      <div className="approve-church-tb__header display--flex">
        <div className="approved-church__checkbox">
          {/* TODO: Change to a component */}
          <input type="checkbox" />
        </div>
        <div>&lbrace;NAME OF CONDITION&rbrace;</div>
      </div>
      <div className="approve-church-tb__churches">
        {
          churchesData.map((churchData) => (
            <ApproveChurch
              key={churchData.church_id}
              classNameModfier={classNameModfier}
              churchData={churchData}
              variant={APPROVE_CHURCH_SEND_PRIVATE_INFO} />
          ))
        }
      </div>
    </div>
  );
};

export default ApproveChurchTable;
