import React from "react";
import styles from "../../styles/bathroom-remodeling-roseville.module.scss";
import { Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NextSeo } from "next-seo";

const BathroomRemodelingRoseville = () => {
  return (
    <div className={styles.bathroom_remodeling_container}>
      <NextSeo
        title="Bathroom Remodeling Roseville, CA"
        description="If your bathroom is outdated or needs a fresh new look, call JC Construction for bathroom remodeling in Roseville, CA."
        canonical="https://jcconstruction.us/roseville-ca/bathroom-remodeling-roseville-ca"
      />
      <Navbar />
      <Container maxWidth="xl" disableGutters={true}>
        <div className={styles.hero_header_container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={4}>
              <div className={styles.hero_img_1}>
                <Image
                  src="//images/roseville/bathroom/roseville-bathroom-remodel.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="roseville-bathroom-remodel"
                  placeholder="blur"
                  blurDataURL="//images/roseville/bathroom/roseville-bathroom-remodel.jpg"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <div className={styles.hero_img_1}>
                <Image
                  src="//images/roseville/bathroom/roseville-bathroom-remodel2.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="roseville-bathroom-remodel2"
                  placeholder="blur"
                  blurDataURL="//images/roseville/bathroom/roseville-bathroom-remodel2.jpg"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <div className={styles.hero_img_1}>
                <Image
                  src="//images/roseville/bathroom/roseville-bathroom-remodel3.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="roseville-bathroom-remodel3"
                  placeholder="blur"
                  blurDataURL="//images/roseville/bathroom/roseville-bathroom-remodel3.jpg"
                />
              </div>
            </Grid>
          </Grid>
          <div className={styles.header_content}>
            <div className={styles.content}>
              <Typography variant="h1">
                Custom Bathroom Remodeling Roseville, CA
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.master_bathroom_container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={styles.master_bathroom_content_container}>
                <Typography variant="h3">
                  Does your master bathroom or guest bathroom seem a little too
                  old?
                </Typography>
                <Typography variant="body1">
                  Would you like to Spruce up the existing place or would you
                  like a remodel that will give you a new bathroom? Have your
                  needs as a family changed and now you need more adjustment to
                  prepare for new members.
                </Typography>
                <Typography variant="body1">
                  The reasons why you would need to remodel or reconstruct your
                  bathroom are numerous, and we understand.
                </Typography>
                <Typography variant="body1">
                  No matter the current condition of your bathroom, we at{" "}
                  <a href="https://jcconstruction.us/" target="_blank">
                    JC Construction
                  </a>{" "}
                  are the ideal bathroom remodeling contractors for your needs.
                  Since our inception in 2007, we have built a solid legacy that
                  relies on providing quality services to the people of
                  Roseville, CA, and beyond. As part of our mandate, we have
                  done shower replacement, shower remodel, and bathroom
                  renovation. Therefore, if you need{" "}
                  <a
                    href="https://jcconstruction.us/custom-bathroom-remodels"
                    target="_blank"
                  >
                    custom bathroom remodeling
                  </a>{" "}
                  services, we can help you develop a functional, attractive,
                  and comfortable bathroom for your family's needs.
                </Typography>
                <div className={styles.btn_container}>
                  <Link href="/contact">
                    <PrimaryButton>Get A Quote</PrimaryButton>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.master_bathroom_img_container}>
                <div>
                  <div className={styles.master_img_1}>
                    <Image
                      src="//images/roseville/bathroom/master-bathroom.jpg"
                      width={336}
                      height={415}
                      objectFit="fill"
                      alt="master bathroom sink"
                    />
                  </div>
                  <div className={styles.master_img_2}>
                    <Image
                      src="//images/roseville/bathroom/master-bathroom2.jpg"
                      width={336}
                      height={415}
                      objectFit="fill"
                      alt="master bathroom shower"
                    />
                    <div className={styles.framing_black}></div>
                  </div>
                </div>
                <div>
                  <div className={styles.master_img_3}>
                    <Image
                      src="//images/roseville/bathroom/master_3.jpg"
                      width={336}
                      height={415}
                      objectFit="contain"
                      alt="master bathroom full"
                    />
                    <div className={styles.framing_yellow}></div>
                  </div>
                  <div className={styles.master_img_4}>
                    <Image
                      src="//images/roseville/bathroom/master-bathroom4.jpg"
                      width={336}
                      height={415}
                      objectFit="fill"
                      alt="master bathroom bath"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.what_happens_container}>
          <div className={styles.what_happens_header}>
            <Typography variant="h2">
              What Happens During Roseville Bathroom Renovation Services?
            </Typography>
            <Typography variant="body1">
              Our process goes as follows:
            </Typography>
          </div>
          <div className={styles.what_happens_cards_container}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_img_with_content}>
                    <Image
                      src="//images/roseville/bathroom/happens_1.jpg"
                      width={565}
                      height={531}
                      layout="fill"
                      objectFit="cover"
                      alt="bathroom remodel background"
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.img_content}>
                      <Typography variant="h4">
                        Understanding the Kind of Bathroom the Client Wants
                      </Typography>
                      <div className={styles.text_line}></div>
                      <Typography variant="span">
                        This is usually the first step in a bathroom remodeling
                        process. We ask the client whether they want the master
                        bathroom or a guest bedroom remodeled and get to know
                        the details of what they want. In some cases, the
                        clients may want to convert a standard bath into a wet
                        bath. Knowing what you want determines the budget. For
                        instance, master bathrooms and wet baths are generally
                        more expensive than standard bathrooms and guest
                        bedrooms.
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_content}>
                    <Typography variant="h4">
                      Understanding the Layout
                    </Typography>
                    <div className={styles.text_line}></div>
                    <Typography variant="span">
                      As a building and construction company, we help you make
                      the best of your bathroom space by finding a layout that
                      would work for your space. We make use of as much space as
                      possible by arranging your items and appliances so that it
                      remains beautiful yet functional. It is especially crucial
                      that you properly plan a small bathroom.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_img_with_content}>
                    <Image
                      src="//images/roseville/bathroom/happens_2.jpg"
                      width={565}
                      height={531}
                      layout="fill"
                      objectFit="cover"
                      alt="bathroom remodel background"
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.img_content}>
                      <Typography variant="h4">FLooring</Typography>
                      <div className={styles.text_line}></div>
                      <Typography variant="span">
                        The next step in our process is to pick the right
                        flooring for your needs. For instance, hardwood flooring
                        is not an ideal flooring choice for the bathroom. At JC
                        Construction, we recommend that you use vinyl flooring
                        for your bathroom. However, there are other floor
                        choices including ceramic and porcelain tiles, vinyl
                        planks, and sheet vinyl.
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_content}>
                    <Typography variant="h4">
                      Choosing Materials and Products
                    </Typography>
                    <div className={styles.text_line}></div>
                    <Typography variant="span">
                      You must choose the right materials and products for your
                      bathroom remodeling projects. We ensure that we help you
                      choose quality materials that can stand the test of time.
                      We help you strike a fine balance between quality and
                      costs so that you are spending the right amount of money
                      for the right products. Our materials and products come
                      from trusted, honest suppliers. Then, we do a quality job
                      that will ensure the maximum lifespan of your house.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_img_with_content}>
                    <Image
                      src="//images/roseville/bathroom/happens_3.jpg"
                      width={565}
                      height={531}
                      layout="fill"
                      objectFit="cover"
                      alt="bathroom remodel background"
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.img_content}>
                      <Typography variant="h4">Ventilation</Typography>
                      <div className={styles.text_line}></div>
                      <Typography variant="span">
                        In many cases, a client would forget ventilation or
                        simply overlook it. However, at JC Construction, we
                        understand just how important ventilation is especially
                        during the winter when you cannot open the window and
                        when it is warmer and opening windows would let in the
                        dust.
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={styles.what_happens_cards}>
                  <div className={styles.what_happends_content}>
                    <Typography variant="h4">
                      Determining Whether You Need a Bathtub or Shower
                    </Typography>
                    <div className={styles.text_line}></div>
                    <Typography variant="span">
                      Different people have different preferences. Whether you
                      prefer a shower or bathtub, our bathroom remodeler can
                      give you an idea of where to start. We help you figure out
                      the type of installation you need. Whether you want a
                      walk-in tub or shower for your elderly family members or
                      you prefer a standard shower, our shower remodel experts
                      have the skills to help you achieve your goals.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={styles.hire_us_container}>
          <div className={styles.hire_us_header_container}>
            <Typography variant="h3">
              Why Hire Us for Your Bathroom Remodeling Project?
            </Typography>
            <Typography variant="body1">
              Many companies could remodel your bathroom. So, why hire us?
            </Typography>
          </div>
          <div className={styles.hire_us_content_card_container}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_img}>
                  <Image
                    src="//images/roseville/bathroom/hire_us_1.jpg"
                    width={875}
                    height={618}
                    objectFit="contain"
                    alt="JC construction bathroom remodeling folsom"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_content}>
                  <div className={styles.hire_us_header}>
                    <div className={styles.hire_us_line}></div>
                    <Typography variant="h4">
                      We are Professionals at What We Do
                    </Typography>
                  </div>
                  <Typography variant="span">
                    As a person who needs a bathroom remodel, you may be tempted
                    to undertake the project on your own. However, home
                    remodeling in general can be an arduous task that is best
                    left to professionals who understand the intricacies of the
                    job. Any mistakes could be costly as this may mean your
                    bathroom is not as functional as you would like it to be and
                    you will have to spend more money correcting the mistakes.
                  </Typography>
                  <Typography variant="span">
                    With JC Construction, you have access to some of the top
                    talents in the field. Our designers and handymen are
                    qualified for the job and are trained to provide only the
                    best of services. We provide full service from the start to
                    the end. Therefore, you do not need to hire other
                    professionals such as an electrician or plumber.
                  </Typography>
                  <div className={styles.black_box_1}></div>
                </div>
              </Grid>
            </Grid>
            <Grid container sx={{ flexDirection: { md: "row-reverse" } }}>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_img}>
                  <Image
                    src="//images/roseville/bathroom/hire_us_2.jpg"
                    width={875}
                    height={618}
                    objectFit="contain"
                    alt="JC construction bathroom folsom"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_content_2}>
                  <div className={styles.hire_us_header}>
                    <div className={styles.hire_us_line}></div>
                    <Typography variant="h4">
                      We are Licensed and Insured
                    </Typography>
                  </div>
                  <Typography variant="span">
                    One of the markers of a professional contractor is that they
                    have a license and are insured. We have all the necessary
                    permits, plans, and documentation to ensure that we follow
                    the regulations and meet the requirements. Furthermore,
                    having insurance means that your property is covered in case
                    of any emergencies or accidents.
                  </Typography>
                  <Typography variant="span">
                    AT JC Construction, we care about the details to give you
                    peace of mind.
                  </Typography>
                  <div className={styles.black_box_3}></div>
                  <div className={styles.black_box_2}></div>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_img}>
                  <Image
                    src="//images/roseville/bathroom/hire_us_3.jpg"
                    width={875}
                    height={618}
                    objectFit="contain"
                    alt="JC construction bathroom remodeling"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={styles.hire_us_card_content}>
                  <div className={styles.hire_us_header}>
                    <div className={styles.hire_us_line}></div>
                    <Typography variant="h4">Competitive Prices</Typography>
                  </div>
                  <Typography variant="span">
                    As we begin to work together, we would like you to know that
                    we offer competitive prices to our clients. We will first
                    give you a free estimate on your project in Roseville. You
                    will notice that we don’t make you choose between
                    competitive pricing and high quality. Instead, we offer
                    quality services at an affordable price to ensure the
                    satisfaction of our clients. takes.
                  </Typography>
                  <Typography variant="span">
                    No matter what your needs are and what your budget is, we
                    have something for you.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.btn_container}>
            <Link href="/contact">
              <PrimaryButton>Hire Us Now</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className={styles.reach_out_container}>
          <Image
            src="//images/roseville/bathroom/bathroom-remodel-roseville-end.jpg"
            layout="fill"
            objectFit="cover"
            alt="Full custom bathroom remodeling folsom"
            placeholder="blur"
            blurDataURL="//images/roseville/bathroom/bathroom-remodel-roseville-end.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content}>
            <Typography variant="h3">
              Reach out to the Expert Bathroom Remodeling Contractors Today
            </Typography>
            <Typography variant="body1">
              Bathroom remodeling is a time-consuming task that needs the able
              hands of a professional. However, needs may vary. One client will
              need you to enlarge an existing bathroom, another will want their
              space to be renovated and yet another may need just some slight
              adjustments to meet the needs of their elderly or younger family
              members. Whatever type of adjustment you need, we understand. Our
              professionals will reach out to you and work diligently to ensure
              that your project is complete. We work within a wide area and we
              can serve you whether you are in Granite Bay, Shingle Springs,
              Lincoln, Roseville, Citrus Heights, North Highlands, or even
              beyond these areas.
            </Typography>
            <Typography variant="body1">
              All you have to do is take the first step and reach out to us,
              then you will see the JC Construction difference.
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

export default BathroomRemodelingRoseville;
