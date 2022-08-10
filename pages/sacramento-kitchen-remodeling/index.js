import React, { useRef, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./space-redefined.module.scss";
import Image from "next/image";
import Video from "./Video";
import { PrimaryButton, OutlineButton } from "../../components/Buttons/Buttons";
import Carousel from "react-elastic-carousel";
import { AnimatePresence } from "framer-motion";
import Lightbox from "react-image-lightbox";
import MyModal from "../../components/LP-Popup/index";
import router from "next/router";

const SpaceRedefined = () => {
  let [modal, setModal] = React.useState(false);
  let [isOpen, setIsOpen] = React.useState(false);
  let [selectedImg, setSelectedImg] = React.useState();

  let allTestimonialsArr = [
    {
      src: "https://www.youtube.com/embed/fXFcHnDfDBs",
      thumbnail: "/images/kitchen_remodel_lp/testimonials_1.png",
      title: "Roseville Kitchen Remodel",
      description: `"We felt so comfortable"`,
    },
    {
      src: "https://www.youtube.com/embed/YuW_I2pLFgQ",
      thumbnail: "/images/kitchen_remodel_lp/testimonials_1.png",
      title: "Sacramento Kitchen Remodel",
      description: `"Very proud of their work"`,
    },
    {
      src: "https://www.youtube.com/embed/WbOUpmGkdxg",
      thumbnail: "/images/kitchen_remodel_lp/testimonials_1.png",
      title: "Folsom Kitchen Remodel",
      description: `"We were really impressed"`,
    },
  ];
  async function Send(payload) {
    await fetch("/api/contact/kitchen-remodel", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(payload),
    });
  }

  const onFormSubmit = e => {
    e.preventDefault();
    const payload = {
      fullName: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      address: e.target[3].value,
    };
    Send(payload);
    router.push("/thank-you");
  };

  return (
    <div className={styles.space_redefined_container}>
      <Container maxWidth="xl" disableGutters={true}>
        <AnimatePresence>
          {modal && <MyModal setModal={setModal} />}
        </AnimatePresence>
        <div className={styles.hero_header_container}>
          <Image
            src="//images/kitchen_remodel_lp/sacramento_kitchen_hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/kitchen_remodel_lp/sacramento_kitchen_hero.jpg"
          />
          <div className={styles.overlay}></div>
          <div className={styles.header_content_container}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <div className={styles.header_content}>
                  <Typography variant="h2">
                    Sacramento's #1 Premium Kitchen Remodeling Contractors
                  </Typography>
                  <Typography variant="body1">
                    Transform your kitchen in as little as three days. Get a
                    free cabinet refacing quote! We’ll design and build your
                    dream kitchen. Affordable pricing. Easy financing.
                  </Typography>
                  <div className={styles.btns_container}>
                    <a href="tel:+19168867113">
                      <PrimaryButton>Call us today!</PrimaryButton>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className={styles.header_form}>
                  <form onSubmit={onFormSubmit}>
                    <Typography variant="h4">
                      Save Up to $1,800 OFF Your Kitchen Remodel Today!
                    </Typography>
                    <Typography variant="body1">
                      An affordable kitchen renovation doesn't mean you need to
                      compromise on quality.
                    </Typography>
                    <div className={styles.form_inputs}>
                      <input type="text" required placeholder="Full Name" />
                      <br />
                      <input type="text" required placeholder="Phone" />
                      <br />
                      <input type="text" required placeholder="Email" />
                      <br />
                      <input type="text" placeholder="Address" />
                    </div>
                    <div className={styles.checks}>
                      <input required type="checkbox" />
                      <small>I accept the Terms of Use & Privacy Policy</small>
                    </div>
                    <div className={styles.btn_container}>
                      <PrimaryButton type="submit">Redeem Offer</PrimaryButton>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={styles.testimonials_container}>
          <Image
            src="//images/kitchen_remodel_lp/testimonial_bg.png"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/kitchen_remodel_lp/testimonial_bg.png"
          />
          <div className={styles.main_testimonials}>
            <div className={styles.testimonials_header}>
              <Typography variant="h3">
                Here are what past clients say about JC Construction:
              </Typography>
            </div>
            <span className={styles.commas}>”</span>
            <div className={`${styles.video_section} video_section`}>
              <Carousel showArrows={false}>
                {allTestimonialsArr.map((item, index) => (
                  <div
                    className={styles.testimonial_video_container}
                    key={index}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className={styles.video_content}>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className={styles.product_container}>
          <Grid
            container
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          >
            <Grid item xs={12} md={6}>
              <div className={styles.product_content}>
                <Typography variant="body1">
                  Kitchens are family spaces. They are busy, fussy and need
                  maintenance throughout the year. You have kids who make a mess
                  and pets who break things. Let's not forget those outsiders
                  with little love for your walls and countertops.
                </Typography>
                <div className={styles.color_div1}>
                  <Typography variant="body1">
                    And what are you left with?{" "}
                  </Typography>
                  <Typography variant="body1">
                    Scruffs, scratches, marks, and very unsightly stains! Not to
                    mention the broken edges and old designs. There is a ton of
                    wear and tear that needs to be handled with care and
                    precision.
                  </Typography>
                </div>
                <div className={styles.color_div2}>
                  <Typography variant="body1">
                    We care about your kitchen as much as you do. We care about
                    the memories you carve out in these spaces. We want them to
                    spark joy and leave a trail of stories. A well-placed
                    cabinet, a handle that feels oh so good! A countertop that
                    brings back childhood memories.
                  </Typography>
                </div>
                <Typography variant="body1">
                  We remodel, design, build and elevate your kitchen space to
                  inspire and energize you. It's not just remodeling- it's
                  creating stories you can relive.
                </Typography>
                <div className={styles.btn_container}>
                  <OutlineButton onClick={() => setModal(true)}>
                    Get an Estimate
                  </OutlineButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.product_img}>
                <Image
                  src="//images/kitchen_remodel_lp/sacramento_kitchen.jpg"
                  width="597"
                  height="888"
                  objectFit="contain"
                  alt="Sacramento Kitchen Remodel JC Construction"
                  placeholder="blur"
                  blurDataURL="//images/kitchen_remodel_lp/sacramento_kitchen.jpg"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.product_container2}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <div className={styles.product_img}>
                <span className={styles.desktop_img}>
                  <Image
                    src="//images/kitchen_remodel_lp/sacramento_kitchen1.jpg"
                    width="658"
                    height="898"
                    objectFit="contain"
                    alt="Kitchen Remodeling JC Construction Lincoln"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/sacramento_kitchen1.jpg"
                  />
                </span>
                <span className={styles.mobile_img}>
                  <Image
                    src="//images/kitchen_remodel_lp/sacramento_kitchen1.jpg"
                    width="400"
                    height="450"
                    objectFit="fill"
                    alt="Kitchen Remodeling JC Construction Lincoln"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/sacramento_kitchen1.jpg"
                  />
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.product_content_container}>
                <div className={styles.product_content1}>
                  <Typography variant="body1">
                    If you live in the Sacramento region, look no further than
                    JC Construction for your kitchen remodeling needs. We work
                    with you to custom design your kitchen within your
                    designated budget. Whether you want to expand your kitchen,
                    build it to have a modern look, or focus on creating a
                    rustic and inviting space for your family, JC Construction
                    offers it all. Today kitchens in Sacramento are not what
                    they used to be. New construction techniques, improved
                    eco-friendly design and materials, energy-efficient
                    fixtures, and easy cleaning countertops are the most
                    sought-after kitchen features. We install not just the
                    newest type of fixtures but make sure to give you a healthy
                    and sanitary kitchen with a bonus- an exquisitely attractive
                    masterpiece.
                  </Typography>
                </div>
                <div className={styles.product_content2}>
                  <Typography variant="body1">
                    ✓ Kitchen Cabinet Remodeling
                  </Typography>
                  <Typography variant="body1">
                    ✓ Kitchen Countertop Remodeling
                  </Typography>
                  <Typography variant="body1">
                    ✓ Kitchen Permits, Design and Inspection
                  </Typography>
                  <Typography variant="body1">✓ 3D Rendering</Typography>
                  <Typography variant="body1">
                    ✓ Custom layout and planning
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.quote_kitchen_container}>
          <Image
            src="//images/kitchen_remodel_lp/proud_kitchen.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero image"
            placeholder="blur"
            blurDataURL="/images/kitchen_remodel_lp/proud_kitchen.jpg"
          />
          <div className={styles.quote_kitchen_content}>
            <Typography variant="h2">
              Are You Proud to Show Off Your Kitchen to Your Friends and Family?
            </Typography>
            <div className={styles.btn_container}>
              <PrimaryButton onClick={() => setModal(true)}>
                Your Dream Kitchen
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className={styles.work_speak_container}>
          <div className={styles.work_heading}>
            <Typography variant="h3">Our Work Speaks for Itself</Typography>
          </div>
          <Grid container>
            <Grid item xs={6} md={6}>
              <div className={styles.work_speak_item_container}>
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/before_1.jpg"
                    width="686"
                    height="436"
                    objectFit="fill"
                    alt="work_1.png"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/before_1.jpg"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_before}>
                    <small>Before</small>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className={styles.work_speak_item_container_colored}>
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/after_1.jpg"
                    width="686"
                    height="436"
                    objectFit="fill"
                    alt="work_2.png"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/after_1.jpg"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_after}>
                    <small>After</small>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div
                className={`${styles.work_speak_item_container_colored} ${styles.color_reverse}`}
              >
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/before_2.jpg"
                    width="686"
                    height="436"
                    objectFit="fill"
                    alt="work_3.png"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/before_2.jpg"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_after}>
                    <small>Before</small>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div
                className={`${styles.work_speak_item_container} ${styles.reverse}`}
              >
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/after_2.jpg"
                    width="686"
                    height="436"
                    objectFit="fill"
                    alt="work_4.png"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/after_2.jpg"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_before}>
                    <small>After</small>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className={styles.work_speak_item_container}>
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/before_3.jpg"
                    width="686"
                    height="436"
                    objectFit="fill"
                    alt="Kitchen Remodeling JC Before"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/before_3.jpg"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_before}>
                    <small>Before</small>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className={styles.work_speak_item_container_colored}>
                <div className={styles.work_speak_item}>
                  <Image
                    src="//images/kitchen_remodel_lp/after_3.png"
                    width="686"
                    height="436"
                    objectFit="contain"
                    alt="Kitchen Remodeling JC After"
                    placeholder="blur"
                    blurDataURL="//images/kitchen_remodel_lp/after_3.png"
                    onClick={e => {
                      setIsOpen(true);
                      setSelectedImg(e.target.src);
                    }}
                  />
                  <div className={styles.tag_after}>
                    <small>After</small>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={styles.btn_container}>
            <OutlineButton onClick={() => setModal(true)}>
              Show me more
            </OutlineButton>
          </div>
        </div>
        <div className={styles.about_container}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <div className={styles.about_img}>
                <Image
                  src="//images/kitchen_remodel_lp/about_1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="about_1.png"
                  placeholder="blur"
                  blurDataURL="//images/kitchen_remodel_lp/about_1.png"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={styles.about_content}>
                <Typography variant="h3">About JC Constructions</Typography>
                <Typography variant="body1">
                  We are a family-owned business operating in the Sacramento and
                  North California region for over 10 years and counting. Our
                  work is our pride, and we stand for one thing- customer
                  satisfaction. Remodeling is the core and heart of our business
                  here at JC Construction. What started as a small-time passion
                  turned into a team of skilled professionals offering
                  remodeling with the highest quality workmanship and customer
                  service possible in Sacramento. If you need a quick turnaround
                  with your vision intact, you know you can rely on us.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.booking_container}>
          <Grid
            container
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
          >
            <Grid item xs={12} md={6}>
              <div className={styles.booking_content}>
                <div>
                  <Typography variant="h2">
                    Fill Out Form to Save Up to $1800
                  </Typography>
                  <Typography variant="body1">
                    Need a quick estimate, more information, or want to share
                    your ideas with us? Fill out the form below.
                  </Typography>
                  <div className={styles.header_form}>
                    <form onSubmit={onFormSubmit}>
                      <Typography variant="h4">
                        Transform your home and increase it's value
                      </Typography>
                      <div className={styles.form_inputs}>
                        <input type="text" required placeholder="Full Name" />
                        <br />
                        <input type="text" required placeholder="Phone" />
                        <br />
                        <input type="text" required placeholder="Email" />
                        <br />
                        <input type="text" placeholder="Address" />
                      </div>
                      <div className={styles.checks}>
                        <input required type="checkbox" />
                        <small>
                          I accept the Terms of Use & Privacy Policy
                        </small>
                      </div>
                      <div className={styles.btn_container}>
                        <PrimaryButton type="submit">
                          Redeem Offer Now
                        </PrimaryButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.booking_img}>
                <Image
                  src="//images/kitchen_remodel_lp/booking_1.png"
                  width="597"
                  height="888"
                  objectFit="contain"
                  alt="booking_1.png"
                  placeholder="blur"
                  blurDataURL="//images/kitchen_remodel_lp/booking_1.png"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={selectedImg}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default SpaceRedefined;
