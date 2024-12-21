import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import DomainListItem from "../components/DomainListItem";
import domainData from "../data/domainData";

export default function DomainSection() {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justify={isTabletOrSmaller ? "center" : "flex-start"}
      spacing={3}
    >
      {domainData.map((_domainData, index) => (
        <Grid item key={`domain-item-${index}`}>
          <DomainListItem {..._domainData} />
        </Grid>
      ))}
    </Grid>
  );
}
