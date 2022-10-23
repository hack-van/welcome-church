import * as React from 'react';
import classNames from 'classnames';
import './ApproveChurch.scss';
import CheckBox from './CheckBox';
import Button from './Button';

/**
 * Constants for Approve Church:
 */

// For filter churches before sending the initial notification
export const APPROVE_CHURCH_SELECT = 'APPROVE_CHURCH_SELECT';

// For filter churches after
export const APPROVE_CHURCH_SEND_PRIVATE_INFO = 'APPROVE_CHURCH_SEND_PRIVATE_INFO';

/**
 * @param {string} classNameModfier the name to append to the classes
 * @param {ChurchData} churchData
 * @param {string} variant one of the constants above
 */
// eslint-disable-next-line arrow-body-style
const ApproveChurch = ({ classNameModfier, churchData, variant, key }) => {

  const topClasses = classNames('approve-church', 'display--flex',
    `approved-church--${classNameModfier}`);

  return (
    <div className={topClasses}>
      <div className="approved-church__checkbox_wrap">
        {/* TODO: Change to a component */}
        <CheckBox className="approve-church__checkbox" name={`checkbox--${key}`} content='' />
      </div>
      <div className="approve-church__data-wrapper">
        <div className="approve-church__data approve-church__data--top display--flex">
          <div className="approve-church__data-inner">
            <h3 className="approve-church__title">{churchData.name}</h3>
            <div className="approve-church__address">{churchData.address}</div>
          </div>
          {
            variant === APPROVE_CHURCH_SEND_PRIVATE_INFO ? (
              <div className="approve-church__data-inner">
                <div className="approve-church__status">
                  <span className="approve-church__status-text">Approved</span>
                  <span className="approve-church__status-circle" />
                </div>
              </div>
            ) : ''
          }
        </div>
        <div className="approve-church__data approve-church__data--bottom display--flex">
          <div className="approve-church__data-inner">
            <div className="approve-church__denomination">
              <strong className="approve-church__label">Denomination: </strong>
              <span>{churchData.denomination}</span>
            </div>
            <div className="approve-church__languages">
              <strong className="approve-church__label">Languages: </strong>
              <span>{churchData.languages.join(', ')}</span>
            </div>
          </div>
          {
            variant === APPROVE_CHURCH_SEND_PRIVATE_INFO ? (
              <div className="approve-church__data-inner approve-church--button-wrap">
                <Button title="Send Family Info"/>
              </div>
            ) : ''
          }
        </div>
      </div>
    </div>
  );
};

export default ApproveChurch;
