// Designed by Sandra Ashipala for 30-01-2022 LongHack
import Grid from "@mui/material/Grid";

// BioCoins Dashboard
import SuiBox from "components/SuiBox";

// BioCoins Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// BioCoins Dashboard
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Wallet page components
import PaymentMethod from "layouts/wallet/components/PaymentMethod";
import Invoices from "layouts/wallet/components/Invoices";
import WalletInformation from "layouts/wallet/components/WalletInformation";
import Transactions from "layouts/wallet/components/Transactions";

function Wallet() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
        <SuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={45621122} holder="jack peterson" expires="11/25" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Number of Tokens"
                    description="Aquired Tokens"
                    value="3"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <WalletInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Wallet;
