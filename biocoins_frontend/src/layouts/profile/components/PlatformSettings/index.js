import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function PlatformSettings() {
  const [answersPost, setAnswersPost] = useState(false);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SuiTypography
          variant="caption"
          fontWeight="bold"
          textColor="text"
          textTransform="uppercase"
        >
          account
        </SuiTypography>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              Email me when a trial I&apos;m subscribed to reaches its funding goal
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox mt={3}>
          <SuiTypography
            variant="caption"
            fontWeight="bold"
            textColor="text"
            textTransform="uppercase"
          >
            application
          </SuiTypography>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              New clinical trial launches and projects
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              Monthly BioCoins trial updates
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              Subscribe to newsletter
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default PlatformSettings;
