import React from "react";
import styles from "../../styles/kitchen-remodeling-folsom-ca.module.scss";
import { Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { PrimaryButton, OutlineButton } from "../../components/Buttons/Buttons";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NextSeo } from "next-seo";

const kitchenRemodelingFolsomCa = () => {
  return (
    <div className={styles.folsom_ca_container}>
      <NextSeo
        title="Kitchen Remodeling Folsom - Custom Kitchen Remodel Folsom"
        description="Kitchen remodeling Folsom upgrade your kitchen today! Call JC Construction and Remodeling for a custom kitchen remodel in Folsom, CA."
        canonical="https://jcconstruction.us/folsom-ca/kitchen-remodeling-folsom-ca"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/folsom/folsom-kitchen-remodel-hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="Folsom Kitchen Remodel JC Construction"
            placeholder="blur"
            blurDataURL="//images/folsom/folsom-kitchen-remodel-hero.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h1">
              Custom Kitchen Remodeling Folsom, Ca
            </Typography>
            <Typography variant="h4">
              Looking for a Folsom kitchen remodeling company to help with your
              kitchen remodeling project?
            </Typography>
            <div className={styles.btns_container}>
              <Link href="/contact">
                <PrimaryButton>Get a quote</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.self_card_container}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <div className={styles.self_card_img_container}>
                <Image
                  src="//images/folsom/self_card_1.jpg"
                  width={631}
                  height={756}
                  objectFit="contain"
                  alt="Remodeled Kitchen"
                  placeholder="blur"
                  blurDataURL="//images/folsom/self_card_1.jpg"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.self_card_content}>
                <div className={styles.content_1}>
                  <Typography variant="body1">
                    Search no further than JC Construction for your needs. We
                    have been in the construction industry since 2007 and during
                    all this time, we have proven ourselves as the ultimate
                    kitchen remodeling contractors in Folsom.
                  </Typography>
                </div>
                <div className={styles.content_2}>
                  <Typography variant="body1">
                    From kitchen cabinetry to kitchen counter tops and floors,
                    we understand the art and science of remodeling and
                    renovation. From the concept stage of the project, we answer
                    your questions and carry out your kitchen remodeling project
                    to completion. We will recommend ideas and solutions based
                    on our years of experience to ensure you get a functional
                    yet beautiful and long-lasting dream kitchen for your
                    family's needs. Therefore, if you need kitchen remodeling
                    service, we are the experts you should contact.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.our_kitchen_remodels_container}>
          <div className={styles.remodels_header}>
            <Typography variant="h2">Our Kitchen Remodels Process</Typography>
            <Typography variant="body1">
              At JC Construction, we have a unique kitchen remodel process that
              we follow for our projects in Folsom, CA, and beyond.
            </Typography>
          </div>
          <div className={styles.remodels_cards}>
            <div className={styles.cards_layor}></div>
            <Grid container className={styles.cards_grid_container}>
              <Grid item xs={12} md={4}>
                <div className={styles.card_1}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/folsom/remodels_1.jpg"
                      width={442}
                      height={458}
                      objectFit="contain"
                      alt="A kitchen remodeling contractor job"
                      placeholder="blur"
                      blurDataURL="//images/folsom/remodels_1.jpg"
                    />
                  </div>
                  <div className={styles.card_content}>
                    <Typography variant="h3">Kitchen Design Search</Typography>
                    <Typography variant="body1">
                      It is crucial that you consider how you want your kitchen
                      to be laid out. We consider how much space you have, as
                      this will determine whether you can put in place
                      structures such as a kitchen island. We recommend kitchen
                      islands for people who have a big and spacious kitchen.
                      However, in such a case, we would still recommend that you
                      get custom cabinets that can comfortably store your items
                      in the kitchen so that you can maintain the overall
                      beautiful look of your kitchen.
                    </Typography>
                    <Typography variant="body1">
                      If your kitchen is small, we put much thought into the
                      arrangement of cabinets, appliances, and other items. We
                      strive to ensure that your kitchen looks spacious, even if
                      the space looks relatively small.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} className={styles.special_section}>
                <div className={styles.card_2}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/folsom/remodels_2.jpg"
                      width={442}
                      height={458}
                      objectFit="contain"
                      alt="A kitchen remodeling"
                      placeholder="blur"
                      blurDataURL="//images/folsom/remodels_2.jpg"
                    />
                  </div>
                  <div className={styles.card_content}>
                    <Typography variant="h3">
                      Determining the Type of Wood to Be Used
                    </Typography>
                    <Typography variant="body1">
                      One of the key things we look at when offering kitchen
                      remodeling services and bathroom remodeling services is
                      the type of wood to be used for the kitchen cabinets. We
                      use different types of wood depending on the type of
                      finish you would like and your style. Some of the wood we
                      use include oak, maple, pine, and the cherry tree.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.card_3}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/folsom/remodels_3.jpg"
                      width={442}
                      height={458}
                      objectFit="contain"
                      alt="A kitchen remodel"
                      placeholder="blur"
                      blurDataURL="//images/folsom/remodels_3.jpg"
                    />
                  </div>
                  <div className={styles.card_content}>
                    <Typography variant="h3">Countertop Materials</Typography>
                    <Typography variant="body1">
                      Equally important are the countertop materials that you
                      will use. You should have the right materials as
                      countertops are the most prominent place in the kitchen.
                      The materials we use include natural and artificial stone
                      and plastic coating. Natural stone is quite expensive, but
                      it is the best option for those who want a long-lasting
                      yet beautiful finish for their kitchens. Artificial stones
                      are not as expensive as natural ones, but they still last
                      as long and are a good alternative for those who are
                      seeking something cheaper than natural stone. Plastic is
                      the cheapest of all-out alternatives, but it would not
                      last as long as any of the stones.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className={styles.btn_container}>
              <Link href="/contact">
                <OutlineButton>Get a Quote</OutlineButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.why_choose_container}>
          <div className={styles.remodeling_header}>
            <Typography variant="h2">
              Why Choose Us for Your Kitchen Remodel Needs?
            </Typography>
            <Typography variant="body1">
              Some of the reasons why you should work with us include:
            </Typography>
          </div>
          <div className={styles.all_remodeling_container}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={6}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/folsom/why_choose_1.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="Top kitchen remodeling services"
                    placeholder="blur"
                    blurDataURL="//images/folsom/why_choose_1.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We Provide Custom Services
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    One of the main reasons why our clients value us as much as
                    we value them is because we understand their needs. At JC
                    Construction, we handle each client differently,
                    understanding fully well that no kitchen remodel can be
                    exactly like the other. We can make custom kitchen cabinets,
                    kitchen islands, countertops, and much more depending on
                    your needs. All you have to do is reach out to us for
                    kitchen remodeling services and we shall respond and see
                    what you need.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.all_remodeling_container2}>
            <Grid
              container
              sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
            >
              <Grid item xs={12} md={6}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/folsom/why_choose_2.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="Kitchen to show beautiful work"
                    placeholder="blur"
                    blurDataURL="//images/folsom/why_choose_2.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We are Professional and Experienced
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    As one of the best kitchen and bathroom remodeling services,
                    we have what it takes to serve you. We have been serving in
                    the kitchen renovation industry for over a decade and we
                    bring our A-game each time we speak to a customer and work
                    with them.
                  </Typography>
                  <Typography variant="body1">
                    Our experience means we understand your needs and can
                    deliver according to your specifications. We have seen
                    trends come and go and we can tell apart the classics from
                    other styles. Therefore, you can trust us to deliver every
                    time.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.all_remodeling_container3}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={6}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/folsom/why_choose_3.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="nicely remodeled kitchen in folsom"
                    placeholder="blur"
                    blurDataURL="//images/folsom/why_choose_3.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">High-Quality Materials</Typography>
                  </div>
                  <Typography variant="body1">
                    We value our clients and we want what we make for you to
                    last for a long time. However, poor quality materials will
                    cost you, even when the job is well done. To eliminate any
                    chances of your kitchen underperforming, we invest in the
                    highest-quality materials within your budget. Whether you
                    are in Granite Bay, West Sacramento, Fair Oaks, Elk Grove,
                    or anywhere within the surrounding, we are one of the best
                    kitchen remodeling companies you can work with.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.all_remodeling_container2}>
            <Grid
              container
              sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
            >
              <Grid item xs={12} md={6}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/folsom/why_choose_4.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="licensed kitchen contractors"
                    placeholder="blur"
                    blurDataURL="//images/folsom/why_choose_4.jpg"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We are Licensed and Insured
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    As a licensed and insured company, you can be sure that we
                    will plan out the renovation process carefully and that we
                    will be communicating each step of the way to the conclusion
                    of the project. Furthermore, it assures you that we have met
                    all the city and government regulations relevant to our
                    industry. Therefore, you do not have to worry about house
                    inspections as we will ensure that you have complied with
                    all the relevant regulations. Lastly, you can feel safe as
                    we take responsibility for any damage that will take place
                    during construction. While damage and injury are a
                    possibility, it rarely happens with our company.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.btn_container}>
            <Link href="/contact">
              <PrimaryButton>Get a quote</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className={styles.reach_out_container}>
          <Grid
            container
            sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
          >
            <Grid item xs={12} md={5}>
              <Typography className={styles.heading_for_mob} variant="h2">
                We Will Deliver Your Dream Kitchen
              </Typography>
              <Typography variant="h4" className={styles.heading_for_mob}>
                Do you want to renovate your kitchen or are you interested in
                updating some aspects of it or other places in the home?
              </Typography>
              <div className={styles.reach_out_img_container}>
                <Image
                  src="//images/folsom/deliver.jpg"
                  width={612}
                  height={748}
                  objectFit="contain"
                  alt="happy customer after kitchen remodel"
                  placeholder="blur"
                  blurDataURL="//images/folsom/deliver.jpg"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.reach_out_content}>
                <Typography className={styles.heading_for_web} variant="h2">
                  We Will Deliver Your Dream Kitchen
                </Typography>
                <Typography variant="h4" className={styles.heading_for_web}>
                  Do you want to renovate your kitchen or are you interested in
                  updating some aspects of it or other places in the home?
                </Typography>
                <Typography variant="body1">
                  JC Construction is the ultimate kitchen design and renovation
                  company that you need. We offer our services to the citizens
                  of Folsom and we can help you with upgrading cabinets and
                  countertops. Design a backsplash or even install new tiles.
                  Wherever you are, we are the right company for your needs. All
                  you have to do is take the bold step and reach out to us.
                </Typography>
                <div className={styles.btn_container}>
                  <Link href="/contact">
                    <PrimaryButton>Call us today</PrimaryButton>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default kitchenRemodelingFolsomCa;
