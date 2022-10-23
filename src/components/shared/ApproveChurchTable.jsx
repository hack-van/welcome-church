import * as React from 'react';
import ApproveChurch from './ApproveChurch';
import CheckBox from './CheckBox';
import './ApproveChurchTable.scss';

/**
 * @param {string} classNameModfier the name to append to the classes
 * @param {array[ChurchData]} churchesData
 */
const ApproveChurchTable = ({ title, churchesData, classNameModfier }) => {

  if (churchesData.length === 0) {
    return '';
  }

  return (
    <div className={`approve-church-tb approved-church--${classNameModfier}`}>
      <div className="approve-church-tb__header display--flex">
        <div className="approved-church__checkbox_wrap">
          {/* TODO: Change to a component */}
          <CheckBox className="approve-church__checkbox" content='' />
        </div>
        <div className="approved-church-tb__title">{title}</div>
      </div>
      <div className="approve-church-tb__churches">
        {
          churchesData.map((churchData) => (
            <ApproveChurch
              key={churchData.church_id}
              churchId={churchData.church_id}
              classNameModfier={classNameModfier}
              churchData={churchData}
              // variant={APPROVE_CHURCH_SEND_PRIVATE_INFO}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ApproveChurchTable;
