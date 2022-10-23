import * as React from 'react';

export const APPROVE_CHURCH_SELECT = 'APPROVE_CHURCH_SELECT';
export const APPROVE_CHURCH_SEND_PRIVATE_INFO = 'APPROVE_CHURCH_SEND_PRIVATE_INFO';

/**
 * @param {string} classNameModfier the name to append to the classes
 * @param {ChurchData} churchData
 * @param {string} variant one of the constants above
 */
// eslint-disable-next-line arrow-body-style
const ApproveChurch = ({ classNameModfier, churchData, variant }) => {

  return (
    <div className={`approve-church approved-church--${classNameModfier} display--flex`}>
      <div className="approved-church__checkbox">
        {/* TODO: Change to a component */}
        <input type="checkbox" />
      </div>
      <div className="approve-church__data approve-church__data--top">
        <div className="approve-church__data-inner approve-church__data-inner--default">
          <h3 className="approve-church__title">{churchData.name}</h3>
          <div className="approve-church__address">{churchData.address}</div>
        </div>
        {
          variant === APPROVE_CHURCH_SEND_PRIVATE_INFO ? (
            <div className="approve-church__data-inner approve-church__data-inner--custom">
              Hi
            </div>
          ) : ''
        }
      </div>
      <div className="approve-church__data approve-church__data--bottom">
        <div className="approve-church__data-inner approve-church__data-inner--default">
          <div className="approve-church__denomination">
            <strong className="approve-church__label">Denomination</strong>
            <span>{churchData.denomination}</span>
          </div>
          <div className="approve-church__languages">
            <strong className="approve-church__label">Languages</strong>
            <span>{churchData.languages.join(', ')}</span>
          </div>
        </div>
        {
          variant === APPROVE_CHURCH_SEND_PRIVATE_INFO ? (
            <div className="approve-church__data-inner approve-church__data-inner--custom">
              Hi
            </div>
          ) : ''
        }
      </div>
    </div>
  );
};

export default ApproveChurch;
