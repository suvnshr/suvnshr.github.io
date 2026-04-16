"use client";

import { Container, Grid, Typography } from "@mui/material";

import SocialLinkButton from "./SocialLinkButton";
import profileData from "./data/profileData";
import styles from "./ProfileSection.module.scss";

/**
 * Displays the user's main profile information, including name, about, and social links.
 *
 * @returns JSX.Element Profile information section
 * @remarks Loads data from profileData and uses custom SCSS styling.
 * @public
 */
export default function ProfileSection() {
  return (
    <Grid container alignItems="center" className={styles.background}>
      <Grid size={{ xs: 12 }} className={styles.profileContainer}>
        <Container>
          <Grid container>
            <Grid size={12} className={styles.contentContainer}>
              <Typography variant="h2" className={styles.name}>
                {profileData.name}
              </Typography>

              <Typography
                variant="subtitle1"
                className={styles.about}
                component="p"
              >
                {profileData.about}
              </Typography>
            </Grid>

            <Grid container size={12} className={styles.avatarContainer}>
              <div className={styles.socialContainer}>
                {profileData.links.map((linkData, index) => (
                  <SocialLinkButton
                    key={`social-link-button-${index}`}
                    {...linkData}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
