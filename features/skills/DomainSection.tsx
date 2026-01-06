import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DomainListItem from "./DomainListItem";
import domainData from "./data/domainData";

export default function DomainSection() {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justifyContent={isTabletOrSmaller ? "center" : "flex-start"}
      spacing={3}
    >
      {domainData.map((_domainData, index) => (
        <DomainListItem key={`domain-item-${index}`} {..._domainData} />
      ))}
    </Grid>
  );
}
