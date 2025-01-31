function page1() {
  let tl = gsap.timeline();

  tl.from(
    "nav",
    {
      opacity: 0,
      y: -60,
      duration: 0.8,
    },
    "start"
  );
  tl.from(
    ".options h4, .options button",
    {
      opacity: 0,
      y: -50,
      duration: 0.4,
      stagger: 0.2,
    },
    "start"
  );
  tl.to(
    ".star",
    {
      rotate: -225,
      duration: 1,
    },
    "start"
  );
  tl.from(
    ".top",
    {
      opacity: 0,
      x: -200,
      duration: 0.8,
    },
    "middle-part"
  );
  tl.from(".middle", {
    opacity: 0,
    x: -200,
    duration: 0.8,
  });
  tl.from(".bottom", {
    opacity: 0,
    duration: 0.8,
  });
  tl.from(
    ".right",
    {
      opacity: 0,
      x: 200,
      duration: 1.8,
    },
    "middle-part"
  );
  tl.from(".footer img", {
    opacity: 0,
    y: 80,
    duration: 0.8,
    stagger: 0.2,
  });
}
page1();

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 50%",
    end: "top -0%",
    scrub: 2,
  },
});

tl1.from(
  ".service-desc h2",
  {
    opacity: 0,
    y: -40,
    duration: 0.5,
  },
  "ani0"
);

tl1.from(
  ".service-desc p",
  {
    opacity: 0,
    y: -40,
    duration: 0.5,
    delay: 0.2,
  },
  "ani0"
);

tl1.from(
  ".services .left-top",
  {
    opacity: 0,
    x: -100,
    duration: 1.5,
  },
  "ani1"
);

tl1.from(
  ".services .right-top",
  {
    opacity: 0,
    x: 100,
    duration: 1.5,
  },
  "ani1"
);

tl1.from(
  ".services .left-bottom",
  {
    opacity: 0,
    x: -100,
    duration: 1.5,
  },
  "ani2"
);

tl1.from(
  ".services .right-bottom",
  {
    opacity: 0,
    x: 100,
    duration: 1.5,
  },
  "ani2"
);
