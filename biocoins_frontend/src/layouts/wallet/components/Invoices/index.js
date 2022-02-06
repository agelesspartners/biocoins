// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Wallet page components
import Invoice from "layouts/wallet/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account">
      <SuiBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SuiTypography variant="h6" fontWeight="medium">
          Invoices
        </SuiTypography>
        <SuiButton variant="outlined" buttonColor="info" size="small">
          view all
        </SuiButton>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#EA-415646" token="2 EA tokens" />
          <Invoice date="March, 01, 2019" id="#IP-803481" token="1 IP token" noGutter />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Invoices;
