// Designed by Sandra Ashipala for 30-01-2022 LongHack
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Wallet page components
import Bill from "layouts/wallet/components/Bill";

function WalletInformation() {
  return (
    <Card id="delete-account">
      <SuiBox pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium">
          Tokenized Incentives
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Cohesive Molecule Enhancement for Transcription Factors"
            company="Oswald Theodore Avery Jr."
            email="oswald@longevity.com"
            vat="Receive Premium Support at Howerrt Hospital."
          />
          <Bill
            name="NEURO-iNN patented glutathione derivative and  polyphenols"
            company="Sir James Whyte Black"
            email="oswald@standrews.uk"
            vat="Receive 46% discount on annual Health Insuarence for any family member."
          />
          <Bill
            name="Anti-Ageing Drug Discovery and Repurposing"
            company="Elizabeth Blackwell"
            email="elizabeth@nortoncollege.us"
            vat="Receive full reimbursement on any amount paid on the occurrence of a specified illness."
            noGutter
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default WalletInformation;
