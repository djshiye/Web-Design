import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 8px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 16px;
  color: #ffffff;
`;

const StyledCard = styled(Card)`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Set background color to semi-transparent white */
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledTypographyTitle = styled(Typography)`
  margin-bottom: 8px;
  color: #000000; /* Set font color to black */
`;

const StyledTypographyContent = styled(Typography)`
  flex-grow: 1;
  color: #000000; /* Set font color to black */
`;

const Posts = () => {
  return (
    <div style={{ background: "url('https://images.unsplash.com/photo-1600762516498-761775b86af7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <StyledContainer>
        <StyledTypography variant="h4" gutterBottom align="center">Blog Posts</StyledTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypographyTitle variant="h5">I started painting</StyledTypographyTitle>
                <StyledTypographyContent>
                  I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just go back and put one little more happy tree in there. Everybody's different. Trees are different. Let them all be individuals. We'll put some happy little leaves here and there. These things happen automatically. All you have to do is just let them happen. Everyone wants to enjoy the good parts - but you have to build the framework first. Let's do that again. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. If you do too much it's going to lose its effectiveness. If you don't think every day is a good day - try missing a few. You'll see. In life you need colors. Fluff it up a little and hypnotize it.  We can fix anything. Automatically, all of these beautiful, beautiful things will happen. There we go. Look at them little rascals.
                </StyledTypographyContent>
              </StyledCardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypographyTitle variant="h5">Lotta coffee</StyledTypographyTitle>
                <StyledTypographyContent>
                  Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma, bar panna so Barista cortado trifecta extraction, skinny aftertaste filter java cultivar cinnamon. Mazagran trade Barista french and Acerbic acerbic Aged milk cinnamon origin carajillo, mountain coffee roast mug wings Bar single viennese pumpkin go pot, dripper crema flavour mocha At bar sit medium au breve. Espresso Brewed Blue iced Americano robust whipped, bar percolator  grounds go saucer robusta, Au shop Affogato Bar aged coffee, Barista blue strong origin aftertaste. Blue skinny coffee breve Brewed acerbic, siphon steamed And foam, qui Arabica ut latte. Go brewed At aftertaste sweet cinnamon caffeine rich strong caramelization Aftertaste, Body roast body frappuccino Beans extraction sit americano Aroma.
                </StyledTypographyContent>
              </StyledCardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypographyTitle variant="h5">Wholesome Ipsum Pirate</StyledTypographyTitle>
                <StyledTypographyContent>
                  Yar Pirate Ipsum

                  Reef sails strike colors code of conduct parley sloop yardarm square-rigged mizzen loaded to the gunwalls keel. Bilge rat scuttle gangway heave down piracy nipper pirate mizzen topmast deadlights. Aft case shot lugsail Gold Road scourge of the seven seas mutiny skysail reef bowsprit Admiral of the Black.

Man-of-war yardarm plunder Gold Road case shot capstan poop deck grog blossom clap of thunder topsail. Jack Tar coffer weigh anchor lateen sail warp crimp wench square-rigged careen pirate. Ye hearties interloper cable schooner ho avast tackle booty heave down.

Prow reef sails Davy Jones' Locker spike red ensign boom scurvy ahoy belay Sea Legs. List ahoy Chain Shot rope's end to go on account Corsair shrouds code of conduct starboard bilge. Jack Ketch crow's nest topmast run a rig stern Pieces of Eight Jolly Roger Sail ho cog grog blossom.
                </StyledTypographyContent>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default Posts;

