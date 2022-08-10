import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/kitchen-remodeling-roseville.module.scss";
import { Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  SecondaryButtonWhite,
  PrimaryButton,
} from "../../components/Buttons/Buttons";

import { NextSeo } from "next-seo";

const KitchenRemodelingRoseville = () => {
  return (
    <div className={styles.roseville_container}>
      <NextSeo
        title="Kitchen Remodeling Roseville, CA - Custom Kitchen Remodel Roseville"
        description="Kitchen remodeling Roseville upgrade your kitchen today! Call JC Construction and Remodeling for a custom kitchen remodel in Roseville, CA."
        canonical="https://jcconstruction.us/roseville-ca/kitchen-remodeling-roseville"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/roseville/kitchen/hero_header.jpg"
            layout="fill"
            objectFit="cover"
            alt="roseville kitchen remodeling contractors"
            placeholder="blur"
            blurDataURL="/images/roseville/kitchen/hero_header.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <div className={styles.content}>
              <Typography variant="h1">
                Custom Kitchen Remodeling Roseville, CA
              </Typography>
              <Typography variant="body1">
                Search no further than JC Construction for your needs. We have
                been in the construction industry since 2007 and during all this
                time, we have proven ourselves as the ultimate kitchen
                remodeling contractors in Folsom.
              </Typography>
              <Typography variant="body1">
                The kitchen is sacred ground in the home. Here, you cook the
                food that nourishes the family, bond with your children and
                spouse as you cook and clean whatever you use to cook and eat.
                However, over time, your kitchen may not be able to meet your
                needs. It may have deteriorated, be too outdated, or need to be
                expanded depending on how much your family has grown.
              </Typography>
            </div>
            <div className={styles.btns_container}>
              <Link href="/contact">
                <PrimaryButton>Get a quote</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.about_us_container}>
          <Grid
            container
            sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
          >
            <Grid item xs={12} md={6}>
              <div className={styles.about_us_img}>
                <Image
                  src="//images/roseville/kitchen/about_us.png"
                  width={1059}
                  height={852}
                  objectFit="contain"
                  alt="JC Remodeling needs"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.about_us_content}>
                <Typography variant="h2">About Remodeling</Typography>
                <Typography variant="body1">
                  If you are in a situation where you are hoping that you can
                  get a kitchen remodel, you may be wondering how to approach
                  the entire process. Thankfully, we are here for you. Company
                  JC Construction is a top Roseville kitchen remodeling company
                  that has been in the industry for many years.
                </Typography>
                <br />
                <Typography variant="body1">
                  As part of our mandate, we help clients complete their kitchen
                  remodeling projects so they can achieve their dream kitchen.
                  Wherever you are in Roseville, CA, we assure you that we can
                  complete our{" "}
                  <Link href="/custom-kitchen-remodels">
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      custom kitchen remodeling
                    </span>
                  </Link>{" "}
                  service in the given timeframe and with the highest-quality
                  materials. We also provide in-home design consultation for
                  those who want to consult with our designers before working on
                  a master bath, other parts of the bathroom, laundry room, or
                  kitchen space. All you have to do is trust us with the job and
                  trust our professionals for the best results.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.kitchen_remodeling_process_container}>
          <div className={styles.remodeling_header}>
            <Typography variant="h2">Our Kitchen Remodeling Process</Typography>
            <Typography variant="body1">
              As one of the top kitchen remodeling contractors in the area, we
              have an elaborate kitchen remodel process for every kitchen
              remodeling project. We explain what we do below:
            </Typography>
          </div>
          <div className={styles.all_remodeling_container}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={4}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/roseville/kitchen/remodeling_1.png"
                    width={448}
                    height={367}
                    objectFit="contain"
                    alt="kitchen remodeling process"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={styles.about_us_content}>
                  <Typography variant="h4">
                    Search for the Preferred Kitchen Design
                  </Typography>
                  <Typography variant="body1">
                    The first step of our process involves speaking to our
                    clients to understand their preferred kitchen design. We
                    factor in styles, colors, and other information that will be
                    crucial going forward. Will you be renovating just the
                    kitchen or will you need other spaces to be updated to match
                    the style of the renovated kitchen? Would you like to move
                    some appliances or remove the existing cabinets? Whatever
                    your needs, we encourage you to share them with us at this
                    stage.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.all_remodeling_container2}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={4}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/roseville/kitchen/remodeling_2.png"
                    width={448}
                    height={367}
                    objectFit="contain"
                    alt="searching for kitchen remodeling contractors in roseville ca"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={styles.about_us_content}>
                  <Typography variant="h4">Kitchen Layout</Typography>
                  <Typography variant="body1">
                    After understanding the kitchen design of your choice, we
                    will need to draw a kitchen layout. During this stage, we
                    allocate space to the new kitchen cabinets, appliances, and
                    kitchen countertops. No matter the size of your kitchen, our
                    design team can offer ideas that will make it look spacious
                    and still contain all the things you need for a functional
                    kitchen.
                  </Typography>
                  <Typography variant="body1">
                    If your kitchen is spacious, we recommend a kitchen island
                    that is both convenient and modern. If you have the space
                    and would like your kitchen to look spacious, we recommend
                    that your kitchen cabinetry has adequate storage so that all
                    your things are kept intact.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.all_remodeling_container3}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={4}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/roseville/kitchen/remodeling_3.png"
                    width={448}
                    height={367}
                    objectFit="contain"
                    alt="roseville kitchen layout materials and cabinets"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={styles.about_us_content}>
                  <Typography variant="h4">
                    Wood Types for Kitchen Cabinets
                  </Typography>
                  <Typography variant="body1">
                    Kitchen remodeling companies use different types of wood to
                    complete a project depending on the needs of a client. The
                    type of wood you use is important as it will determine the
                    look of your kitchen and how long it will last. If you are
                    not sure of the type of wood you want, we can help you know
                    what will look good in your kitchen and is practical for
                    your needs.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles.content_point_head}
                  >
                    Some of the wood types we use for kitchen remodeling
                    include:
                  </Typography>
                  <div className={styles.content_point}>
                    <p>● Pine</p>
                    <p>● Cherry tree</p>
                    <p>● Oak</p>
                    <p>● Maple</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={styles.main_counter_top_container}>
          <div className={styles.counter_header}>
            <Typography variant="h2">Countertops</Typography>
            <Typography variant="body1">
              Next, we will choose what to use for the kitchen countertop. It is
              crucial that you use the right material on your countertop as
              usually, this is the first place the eye will pay attention to in
              the kitchen. Ideally, the material you use on the countertop
              should be durable and stylish. At{" "}
              <Link href="/">
                <span style={{ color: "blue", cursor: "pointer" }}>
                  JC Construction
                </span>
              </Link>
              , we use a variety of materials for your countertop. They include:
            </Typography>
          </div>
          <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
              <div className={styles.counter_cards_container}>
                <div className={styles.img_container}>
                  <Image
                    src="//images/roseville/kitchen/counter_1.jpg"
                    width={460}
                    height={428}
                    objectFit="fill"
                    alt="kitchen remodeling natural stone"
                  />
                </div>
                <div className={styles.cards_content}>
                  <div className={styles.card_heading}>
                    <Typography variant="h4">Natural Stone</Typography>
                  </div>
                  <Typography variant="body1">
                    Natural is an excellent choice for you if you are into
                    elaborate designs and luxury. However, this is not the only
                    benefit of working with natural stone. Natural stone is
                    damage resistant and durable
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={styles.counter_cards_container}>
                <Image
                  src="//images/roseville/kitchen/counter_2.jpg"
                  width={460}
                  height={428}
                  objectFit="fill"
                  alt="kitchen remodeling Artificial stone"
                />
                <div className={styles.cards_content}>
                  <div className={styles.card_heading}>
                    <Typography variant="h4">Artificial Stone</Typography>
                  </div>
                  <Typography variant="body1">
                    This material imitates the natural color of stones that are
                    used for finishing. However, unlike natural stones, these
                    are less costly. This material is ideal where the cabinets
                    are made of wood.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={styles.counter_cards_container}>
                <Image
                  src="//images/roseville/kitchen/counter_3.jpg"
                  width={460}
                  height={428}
                  objectFit="fill"
                  alt="kitchen remodeling plastic coating"
                />
                <div className={styles.cards_content}>
                  <div className={styles.card_heading}>
                    <Typography variant="h4">Plastic Coating</Typography>
                  </div>
                  <Typography variant="body1">
                    Plastic is an ideal choice for an adventurous person as you
                    can customize the colors that you want. Unfortunately,
                    plastic is not as durable as the other options mentioned.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.why_choose_container}>
          <div className={styles.remodeling_header}>
            <Typography variant="h2">
              Why Choose JC Construction As the Ideal Kitchen Remodeling Company
            </Typography>
            <Typography variant="body1">
              There are numerous building companies in the area. However, there
              are many reasons to choose us over our competitors
            </Typography>
          </div>
          <div className={styles.all_remodeling_container}>
            <Grid container sx={{ flexDirection: { md: "row", xs: "row" } }}>
              <Grid item xs={12} md={6}>
                <div className={styles.romodeling_img}>
                  <Image
                    src="//images/roseville/kitchen/why_choose_1.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="Licensed contractors"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We are a Licensed Contractor
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    Licenses are a confirmation that a company is reliable and
                    has professional designers and builders who can work to
                    ensure your kitchen is remodeled to your taste and
                    expectation. Furthermore, a licensed contractor insures your
                    property against improper work.
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
                    src="//images/roseville/kitchen/why_choose_2.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="professional roseville kitchen remodeling contractors"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We are Professionals at Our Job{" "}
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    As a qualified contractor, we have all the knowledge
                    required for us to complete a job. If you have any questions
                    or need help making decisions about different aspects of
                    your kitchen remodeling project, we can help you and answer
                    all your questions. Therefore, you can be sure that we will
                    do an excellent job with your house. Our extensive
                    experience working around Elk Grove, Cameron Park, Granite
                    Bay, Rancho Cordova, Western County, West Sacramento, and
                    Fair Oaks.
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
                    src="//images/roseville/kitchen/why_choose_3.jpg"
                    width={712}
                    height={428}
                    objectFit="cover"
                    alt="only the best material"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.about_us_content}>
                  <div className={styles.tagline}>
                    <Typography variant="h4">
                      We Use High-Quality Materials
                    </Typography>
                  </div>
                  <Typography variant="body1">
                    As a reliable company, we value our clients. Therefore, when
                    helping you create a renovation project, we use only the
                    highest-quality materials for the job. We advise you on the
                    materials to use for your finishing and what will look good
                    together plus the latest trends.
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
                Reach Out to The Ultimate Kitchen Remodel Professionals Today
              </Typography>
              <div className={styles.reach_out_img_container}>
                <Image
                  src="//images/roseville/kitchen/reach_out_1.jpg"
                  width={612}
                  height={748}
                  objectFit="contain"
                  alt="reach out to your roseville contractors today"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.reach_out_content}>
                <Typography className={styles.heading_for_web} variant="h2">
                  Reach Out to The Ultimate Kitchen Remodel Professionals Today
                </Typography>
                <Typography variant="body1">
                  If you are looking for a company that has your needs at heart
                  and can help you achieve the kitchen of your dreams, you are
                  at the right place. Our experts at JC Construction have been
                  in the industry for years and we have sufficient experience to
                  carry out your project to completion. No matter where you are
                  in Roseville, we have what it takes to finish your remodel.
                  However, you have to take the first step towards ensuring that
                  we work together. All you have to do is reach out to us and
                  you will see the difference in your kitchen.
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

export default KitchenRemodelingRoseville;
