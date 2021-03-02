const eventsSections = [
  [
    // First event section
    {
      eventName: "Winter 2021 Mentorship Program",
      description: "159 Mentor/Mentee Pairs",
      isButton: false,
    },
    {
      eventName: "Fall 2020 Mentorship Program",
      description: "125 Mentor/Mentee Pairs",
      isButton: false,
    },
    {
      eventName: "Summer 2020 Mentorship Program",
      description: "108 Mentor/Mentee Pairs",
      isButton: false,
    },
    {
      eventName: "Winter 2020 Mentorship Program",
      description: "63 Mentor/Mentee Pairs",
      isButton: false,
    },
  ],
  [
    // Second event section
    {
      eventName: "Work Abroad Experience Sharing - July '20",
      description: "Recap",
      isButton: true,
    },
    {
      eventName: "Study Abroad Experience Sharing - June '20",
      description: "Recap",
      isButton: true,
    },
  ],
  [
    // Third event section
    {
      eventName: "Tech+ 101 Coop 101 Workshop and Panel",
      description: "Recap",
      isButton: true,
    },
    {
      eventName: "AI/ML Technical Workshop",
      description: "Recap",
      isButton: true,
    },
  ],
  [
    // Fourth event section
    {
      eventName: "Resume Critique - Jan ‘21",
      description: "252 Resumes Reviewed",
      isButton: false,
    },
    {
      eventName: "Resume Critique - Sept ‘20",
      description: "246 Resumes Reviewed",
      isButton: false,
    },
    {
      eventName: "Mock Interview - June ‘20",
      description: "120 Resumes Reviewed",
      isButton: false,
    },
    {
      eventName: "Resume Critique - May ‘20",
      description: "150 Resumes Reviewed",
      isButton: false,
    },
  ],
];

<div>
  {eventsSections.map((eventSection) => (
    <div>
      <Grid>
        {eventSection.map((event) => (
          <>
            <Grid>
              <Box>
                <Typography>{event.eventName}</Typography>
                <Typography>{event.description}</Typography>
              </Box>
            </Grid>
            {event.isButton && (
              <Grid>
                <Button>Learn more</Button>
              </Grid>
            )}
          </>
        ))}
      </Grid>
    </div>
  ))}
</div>;
