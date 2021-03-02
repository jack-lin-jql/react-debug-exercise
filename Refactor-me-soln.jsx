const eventsSections = [
  [
    // First event section
    {
      eventName: "Winter 2021 Mentorship Program",
      description: "159 Mentor/Mentee Pairs",
      isButton: false,
      link: "",
    },
    {
      eventName: "Fall 2020 Mentorship Program",
      description: "125 Mentor/Mentee Pairs",
      isButton: false,
      link: "",
    },
    {
      eventName: "Summer 2020 Mentorship Program",
      description: "108 Mentor/Mentee Pairs",
      isButton: false,
      link: "",
    },
    {
      eventName: "Winter 2020 Mentorship Program",
      description: "63 Mentor/Mentee Pairs",
      isButton: false,
      link: "",
    },
  ],
  [
    // Second event section
    {
      eventName: "Work Abroad Experience Sharing - July '20",
      description: "Recap",
      isButton: true,
      link: "https://www.youtube.com/watch?v=IMCXAZvUx3k&t=1s",
    },
    {
      eventName: "Study Abroad Experience Sharing - June '20",
      description: "Recap",
      isButton: true,
      link:
        "https://medium.com/techplusuw/study-abroad-experience-sharing-624e3db077d8",
    },
  ],
  [
    // Third event section
    {
      eventName: "Tech+ 101 Coop 101 Workshop and Panel",
      description: "Recap",
      isButton: true,
      link: "https://www.youtube.com/watch?v=jPiPH5KBjNA",
    },
    {
      eventName: "AI/ML Technical Workshop",
      description: "Recap",
      isButton: true,
      link: "https://www.youtube.com/watch?v=I-DlBSFNTRo",
    },
  ],
  [
    // Fourth event section
    {
      eventName: "Resume Critique - Jan ‘21",
      description: "252 Resumes Reviewed",
      isButton: false,
      link: "",
    },
    {
      eventName: "Resume Critique - Sept ‘20",
      description: "246 Resumes Reviewed",
      isButton: false,
      link: "",
    },
    {
      eventName: "Mock Interview - June ‘20",
      description: "120 Resumes Reviewed",
      isButton: false,
      link: "",
    },
    {
      eventName: "Resume Critique - May ‘20",
      description: "150 Resumes Reviewed",
      isButton: false,
      link: "",
    },
  ],
];

<SwipeableViews
  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  {eventsSections.map((eventSection, index) => (
    <TabPanel
      value={value}
      index={index}
      dir={theme.direction}
      className={classes.panel}
    >
      <EventsSection
        events={eventSection.map((event, index) => (
          <Event
            name={event.eventName}
            text={event.description}
            isButton={event.isButton}
            link={event.link}
          />
        ))}
      />
    </TabPanel>
  ))}
</SwipeableViews>;
