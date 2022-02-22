import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard/DashboardScreen/Dashboard";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import ListOfManagers from "./components/ListOfManagers/index";
import ListOfResidents from "./components/ListOfResidents";
import ListofTenants from "./components/ListofTenants";
import IncidentReports from "./components/IncidentReports";
import ListOfVendors from "./components/ListOfVendors";
import ListOfVehicles from "./components/ListOfVehicles";
import InsurancePolicy from "./components/InsurancePolicy";
import ListOfSecurityCompanies from "./components/ListOfSecurityCompanies";
import SexOffenders from "./components/SexOffenders";
import MakeASchedule from "./components/OfficersSchedule/MakeASchedule/MakeASchedule";
import UpdateLeaseInformation from "./components/UpdateLeaseInformation";
import MaintenanceRequests from "./components/MaintenanceRequests";
import OfficersSchedule from "./components/OfficersSchedule";
import ListOfOfficers from "./components/ListOfOfficers";
import RemoveLogo from "./components/RemoveLogo";
import CriminalTrespassList from "./components/CriminalTrespassList";
import PoliceLiasion from "./components/PoliceLiasion";
import TermsandConditions from "./components/Terms&Conditions";
import RentRoll from "./components/RentRoll";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/welcome"
            render={(props) => <Welcome {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/list"
            render={(props) => <ListOfManagers {...props} />}
          />
          <Route
            exact
            path="/listofresidents"
            render={(props) => <ListOfResidents {...props} />}
          />
          <Route
            exact
            path="/listoftenants"
            render={(props) => <ListofTenants {...props} />}
          />
          <Route
            exact
            path="/updateleaseinformation"
            render={(props) => <UpdateLeaseInformation {...props} />}
          />
          <Route
            exact
            path="/incidentreports"
            render={(props) => <IncidentReports {...props} />}
          />
          <Route
            exact
            path="/listofvendors"
            render={(props) => <ListOfVendors {...props} />}
          />
          <Route
            exact
            path="/Listofvehicles"
            render={(props) => <ListOfVehicles {...props} />}
          />
          <Route
            exact
            path="/maintenancerequest"
            render={(props) => <MaintenanceRequests {...props} />}
          />
          <Route
            exact
            path="/officersmanagement"
            render={(props) => <OfficersSchedule {...props} />}
          />
          <Route
            exact
            path="/ListOfSecurityCompanies"
            render={(props) => <ListOfSecurityCompanies {...props} />}
          />

          <Route
            exact
            path="/offenders"
            render={(props) => <SexOffenders {...props} />}
          />

          <Route
            exact
            path="/insurancepolicy"
            render={(props) => <InsurancePolicy {...props} />}
          />

          <Route
            exact
            path="/makeASchedule"
            render={(props) => <MakeASchedule {...props} />}
          />

          <Route
            exact
            path="/listofofficers"
            render={(props) => <ListOfOfficers {...props} />}
          />
          <Route
            exact
            path="/addremovelogo"
            render={(props) => <RemoveLogo {...props} />}
          />
          <Route
            exact
            path="/sexoffender"
            render={(props) => <SexOffenders {...props} />}
          />
          <Route
            exact
            path="/criminal"
            render={(props) => <CriminalTrespassList {...props} />}
          />
          <Route
            exact
            path="/policeliasion"
            render={(props) => <PoliceLiasion {...props} />}
          />
          <Route
            exact
            path="/termsandconditions"
            render={(props) => <TermsandConditions {...props} />}
          />
          <Route
            exact
            path="/rentroll"
            render={(props) => <RentRoll {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
