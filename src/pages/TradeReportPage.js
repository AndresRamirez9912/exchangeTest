import React from 'react';
import PropTypes from 'prop-types';

import ActivityReportingButtonsContainer from 'apex-web/lib/components/ActivityReportingComponents';
import ScheduledReportsTableContainer from 'apex-web/lib/components/ReportSidePaneComponents/ScheduledReportsTable';
import DownloadReportContainer from 'apex-web/lib/components/ReportSidePaneComponents/DownloadReportForm';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './TradeReportPage.css';

const tradeReportPageClasses = getBEMClasses('trade-report-page');

const TradeReportPage = (props, context) => (
  <div className={tradeReportPageClasses()}>
    <div className={tradeReportPageClasses('activity-report')}>
      <div className={tradeReportPageClasses('activity-report-header')}>
        <div className={tradeReportPageClasses('activity-report-header-title')}>
          {context.t('Activity Reporting')}
        </div>
        <div className={tradeReportPageClasses('activity-report-header-text')}>
          {context.t(
            'All of your activity on the exchange is available for you to download as a spreadsheet. Simply choose the type of activity and the timeframe to generate your report.'
          )}
        </div>
      </div>
      <div className={tradeReportPageClasses('activity-report-buttons')}>
        <ActivityReportingButtonsContainer />
      </div>
    </div>
    <div className={tradeReportPageClasses('cyclical-report')}>
      <div className={tradeReportPageClasses('report-header')}>
        {context.t('Cyclical Reports')}
      </div>
      <ScheduledReportsTableContainer />
    </div>
    <div className={tradeReportPageClasses('singal-report')}>
      <div className={tradeReportPageClasses('report-header')}>
        {context.t('Reports Available to Download')}
      </div>
      <DownloadReportContainer />
    </div>
  </div>
);

TradeReportPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradeReportPage;
