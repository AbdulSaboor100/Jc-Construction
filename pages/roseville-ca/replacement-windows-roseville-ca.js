import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/replacement-windows-roseville.module.scss";
import { Container, Typography, Grid } from "@mui/material";
import { OutlineButton, PrimaryButton } from "../../components/Buttons/Buttons";
import Link from "next/link";
import Image from "next/image";

import { NextSeo } from "next-seo";

const ReplacementWindowsRoseville = () => {
  return (
    <div className={styles.replacement_roseville_container}>
      <NextSeo
        title="Replacement Windows and Doors Roseville, CA"
        description="Replacement Windows and Doors in Roseville, CA and surrounding areas | 916-886-7113 Is it time to replace your windows and doors?"
        canonical="https://jcconstruction.us/roseville-ca/replacement-windows-roseville-ca"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              <div className={styles.hero_img_1}>
                <Image
                  src="//images/roseville/replacement/hero_header_1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="hero_header_1"
                  placeholder="blur"
                  blurDataURL="//images/roseville/replacement/hero_header_1.jpg"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <div className={styles.hero_img_1}>
                <Image
                  src="//images/roseville/replacement/hero_header_2.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="hero_header_2"
                  placeholder="blur"
                  blurDataURL="//images/roseville/replacement/hero_header_2.jpg"
                />
              </div>
            </Grid>
          </Grid>
          <div className={styles.header_content}>
            <div className={styles.content}>
              <Typography variant="h1">
                Replacement Windows Roseville, CA
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.are_your_container}>
          <Grid
            container
            sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
          >
            <Grid item xs={12} md={5}>
              <div className={styles.are_your_content}>
                <Typography variant="h3">
                  Are your windows foggy or do you feel that you need new
                  windows that take energy efficiency into consideration?
                </Typography>
                <Typography variant="body1">
                  We are one of the best window replacement companies in
                  Roseville and we assure you that our window installation is
                  above par.
                </Typography>
                <Typography variant="body1">
                  {" "}
                  Our windows are high-quality and we work with the best
                  suppliers who sell replacement windows to ensure that you are
                  getting a good deal for your money. To top it all up, we have
                  certified window installers who understand the window repair
                  and replacement process and will serve you with respect and
                  professionalism, unlike what you will find at other window
                  companies in Roseville.
                </Typography>
                <div className={styles.btn_container}>
                  <Link href="/contact">
                    <PrimaryButton>Get a Quote</PrimaryButton>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.are_your_img_container}>
                <div className={styles.are_your_img_1}>
                  <Image
                    src="//images/roseville/replacement/are_your_2.png"
                    width={422}
                    height={648}
                    objectFit="contain"
                    alt="are_your_1.png"
                  />
                </div>
                <div className={styles.are_your_img_2}>
                  <Image
                    src="//images/roseville/replacement/are_your_3.png"
                    width={422}
                    height={648}
                    objectFit="contain"
                    alt="are_your_1.png"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.our_services_container}>
          <div className={styles.our_services_header}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Image
                  src="//images/roseville/replacement/services_header_1.png"
                  width={560}
                  height={9}
                  objectFit="contain"
                  alt="services_header_1"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.service_header_content}>
                  <Typography variant="h2">Our Services</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Image
                  src="//images/roseville/replacement/services_header_2.png"
                  width={560}
                  height={9}
                  objectFit="contain"
                  alt="services_header_2"
                />
              </Grid>
            </Grid>
          </div>
          <div className={styles.services_card_container}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className={styles.service_card}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/roseville/replacement/services_1.jpg"
                      width={583}
                      height={594}
                      objectFit="cover"
                      alt="services_1"
                    />
                  </div>
                  <div className={styles.card_content_container}>
                    <Typography variant="h4">
                      Commercial Windows Installation
                    </Typography>
                    <Typography variant="small">
                      If you are a business owner looking to improve the look
                      and feel of your business, you are at the right place.
                      Adding commercial storefront glass could be the best
                      option for you. JC Construction is the ideal company that
                      can help you solve all your glass storefront needs. We
                      replace tempered glass, insulated glass, bullet-proof, and
                      laminated glass and can help you upgrade the glass in your
                      business to improve glass performance and reduce UV and
                      heat transmission. We work on all types of windows
                      including double-hung windows, and we can help you put in
                      place window screens on already existing windows.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.service_card_special}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/roseville/replacement/services_3.jpg"
                      width={583}
                      height={594}
                      objectFit="cover"
                      alt="services_3"
                    />
                  </div>
                  <div className={styles.card_content_container}>
                    <Typography variant="h4">Glass Walls</Typography>
                    <Typography variant="small">
                      We provide floor-to-ceiling wall installation. This type
                      of wall is elegant and can help you create an open-air
                      illusion in the office and still do the vital job of
                      separating areas in a large space. These walls are a great
                      way to let in the sun, offer beautiful, unobstructed
                      views, and can also enhance the appearance of a small
                      space.
                    </Typography>
                    <Typography variant="small">
                      We have different types of glass walls including clear,
                      decorative, frosted, and opaque glass. Each of these glass
                      types can be customized to create a unique finish
                      according to the needs of the client and the hardware and
                      finish available.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.service_card}>
                  <div className={styles.card_img_container}>
                    <Image
                      src="//images/roseville/replacement/services_2.jpg"
                      width={583}
                      height={594}
                      objectFit="cover"
                      alt="services_2"
                    />
                  </div>
                  <div className={styles.card_content_container}>
                    <Typography variant="h4">Doors</Typography>
                    <Typography variant="small">
                      Apart from windows and glass walls, our window installers
                      work with doors. Whether you need your patio doors or
                      sliding glass door replaced or French doors to let in some
                      light into the house, we are the professionals for your
                      needs. JC Construction is the company you need. Over our
                      years in existence, we have made it our business to help
                      customers who are looking to improve their doors.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={styles.you_are_ready_container}>
          <div className={styles.are_ready_header}>
            <Typography variant="h3">
              What You Should Do When You are Ready to Get Replacement Windows
              and Doors for Your Home
            </Typography>
            <Typography variant="body1">
              You may be wondering the approach you should take if you feel that
              you need new windows and doors. Below, we discuss the simple steps
              we advise our clients to take:
            </Typography>
          </div>
          <div className={styles.are_you_ready_cards_container}>
            <Grid
              container
              sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
              className={styles.cards_grid_container}
            >
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_content_container}>
                  <div className={styles.special_number_1}>
                    <Typography variant="h5">1</Typography>
                  </div>
                  <Typography variant="h4">Determine Your Budget</Typography>
                  <Typography variant="small">
                    The first step you should take is to figure out your budget.
                    The replacement of windows and doors is a significant
                    project. You should take your time to choose the right
                    windows and doors as this makes it more likely that you will
                    get the right ones for your home. You need to put the effort
                    into researching, viewing, and thinking about it so you
                    could get inspiration for what you want.
                  </Typography>
                  <Typography variant="small">
                    Having a budget is crucial as this will empower you to get
                    high-quality materials and a project at an effective cost.
                    Ensure that you can make a fair investment in the project as
                    this could provide a face-lift and improve the value of your
                    home.
                  </Typography>
                  <Typography variant="small">
                    Your new windows should provide you with security, comfort,
                    and energy-efficient. If you realize that your budget is too
                    low, you may need to readjust your budget to get the quality
                    you desire.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_img_container_1}>
                  <Image
                    src="//images/roseville/replacement/ready_1.png"
                    width={652}
                    height={640}
                    objectFit="contain"
                    alt="determine your window replacement budget"
                  />
                  {/* <div className={styles.img_colored_1}></div> */}
                  {/* <div className={styles.img_colored_2}></div> */}
                </div>
              </Grid>
            </Grid>
            <Grid container className={styles.cards_grid_container}>
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_content_container}>
                  <div className={styles.special_number_2}>
                    <Typography variant="h5">2</Typography>
                  </div>
                  <Typography variant="h4">
                    Finding the Right Company
                  </Typography>
                  <Typography variant="small">
                    {" "}
                    There are many companies in the area selling replacement
                    windows and doors. However, most of these shops are small
                    and they have a limited stock of windows and doors that
                    clients can choose from. You should be careful not to choose
                    low-quality glass that will look new but will not add any
                    value to your home.
                  </Typography>
                  <Typography variant="small">
                    At JC Construction, we have all the solutions you need. We
                    have a wide variety of high-quality glasses at good prices.
                    We have professional window installers who ensure that the
                    windows are properly installed. Therefore, you can be sure
                    that you will get windows to enjoy for years to come.
                  </Typography>
                  <Typography variant="small">
                    Remember, the company that offers you the lowest prices may
                    not necessarily be the right one for your needs. The service
                    you get should go beyond just the costs. You should get
                    quality and value for your money. As a company, we care
                    about you and we will work to ensure that you get the right
                    windows and doors for your needs.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_img_container_2}>
                  <Image
                    src="//images/roseville/replacement/ready_2.png"
                    width={652}
                    height={640}
                    objectFit="contain"
                    alt="the right company for your window replacement"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ flexDirection: { md: "row-reverse", xs: "row" } }}
              className={styles.cards_grid_container}
            >
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_content_container}>
                  <div className={styles.special_number_3}>
                    <Typography variant="h5">3</Typography>
                  </div>
                  <Typography variant="h4">
                    Figure Out What You Want In Every Room
                  </Typography>
                  <Typography variant="small">
                    It is crucial that you want for different rooms in the
                    house. If you are not sure about what to get, you can talk
                    to us at JC Construction. As professionals, we have
                    experience working with different clients. We can advise you
                    on walls, windows, and doors. Therefore, you can be
                    confident that this is the perfect opportunity to improve
                    the aesthetics of your home.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.are_you_ready_img_container_3}>
                  <Image
                    src="//images/roseville/replacement/ready_3.png"
                    width={652}
                    height={640}
                    objectFit="contain"
                    alt="happy roseville customers"
                  />
                </div>
              </Grid>
            </Grid>
            <div className={styles.replacement_line}></div>
          </div>
        </div>
        <div className={styles.professional_services_container}>
          <Typography variant="h3">
            Professional Window Installation Services for Your Home
          </Typography>
          <Typography variant="body1">
            As one of the best Granite Bay windows installers who have been in
            the industry for long, we have what it takes to make your dream home
            a reality.
          </Typography>
          <Typography variant="body1">
            We offer quality services using the best materials to ensure that
            the windows and doors we install can stand the test of time. We
            offer a free estimate and work tirelessly to ensure that we install
            your windows exactly as you had envisioned. Furthermore, we have a
            great customer service team at your beck and call.
          </Typography>
          <div className={styles.btn_container}>
            <Link href="/contact">
              <OutlineButton>Contact Us</OutlineButton>
            </Link>
          </div>
        </div>
        <div className={styles.reach_out_container}>
          <Image
            src="//images/roseville/replacement/reach_us_bg.jpg"
            layout="fill"
            objectFit="cover"
            alt="get in touch with roseville window replacement company"
            placeholder="blur"
            blurDataURL="//images/roseville/replacement/reach_us_bg.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h2">
              Reach Out To Us Today for Replacement Windows Roseville, CAg
            </Typography>
            <Typography variant="body1">
              Do you need your windows and doors replaced but you do not know
              where to start?
            </Typography>
            <Typography variant="body1">
              We understand your plight. Getting the right company to work with
              for such an important project can be difficult. However, we are
              the right solution. We understand the industry and the evolving
              trends. Therefore, you can trust us for a solution when you have
              any questions about windows replacement or installation. The first
              step you have to take is to fill out our form on the website for a
              free estimate and we shall take it over from there.
            </Typography>
            <div className={styles.btn_container}>
              <Link href="/contact">
                <PrimaryButton>Get a quote</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default ReplacementWindowsRoseville;
