import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserSummary from './UserSummaryComponent';
import { logout } from 'apex-web/lib/redux/actions/authActions';
import { selectAccount } from 'apex-web/lib/redux/actions/userActions';
import {
  notMarginAccountsSelector,
  marginAccountSelector,
  defaultAccountSelector
} from 'apex-web/lib/redux/selectors/marginSelectors';

const mapStateToProps = state => {
  const { selectedAccountId } = state.user;
  const marginAccount = marginAccountSelector(state);
  const accounts = notMarginAccountsSelector(state);
  let selectedAccount = accounts.find(
    account => account.AccountId === selectedAccountId
  );

  if (!selectedAccount && marginAccount) {
    selectedAccount = defaultAccountSelector(state);
  }

  return {
    betaOptedIn: localStorage.getItem('betaOptedIn'),
    accounts,
    selectedAccount
  };
};

const mapDispatchToProps = {
  logout,
  selectAccount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserSummary));
