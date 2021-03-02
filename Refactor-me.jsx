<SwipeableViews
  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  <TabPanel
    value={value}
    index={0}
    dir={theme.direction}
    className={classes.panel}
  >
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Box className={classes.row}>
          <Typography gutterBottom variant="h5" component="h2">
            Fall 2020 Mentorship Program
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Matched 110 Mentor/Mentee Pairs
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}></Grid>
      <Grid item xs={9}>
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            Spring 2020 Mentorship Program
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Matched 66 Mentor/Mentee Pairs
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}></Grid>
    </Grid>
  </TabPanel>
  <TabPanel value={value} index={1} dir={theme.direction}>
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Box className={classes.row}>
          <Typography gutterBottom variant="h5" component="h2">
            Work Abroad Experience Sharing - July ‘20
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn about the experiences of current and past UW students who have
            interned outside of Canada and the U.S. and how they found those
            opportunities.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}>
        <Button
          variant="outlined"
          color="primary"
          href="https://www.youtube.com/watch?v=wiXHkmc2SCQ&t=11s"
          target="_blank"
          disableElevation
        >
          Learn more
        </Button>
      </Grid>
      <Grid item xs={9}>
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            Study Abroad Experience Sharing - June ‘20
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn about the experiences shared by some current and past student
            from UW while completing their study term abroad.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}>
        <Button
          variant="outlined"
          color="primary"
          href="https://medium.com/@techplusuw/study-abroad-experience-sharing-624e3db077d8"
          target="_blank"
          disableElevation
        >
          Learn more
        </Button>
      </Grid>
    </Grid>
  </TabPanel>
  <TabPanel value={value} index={2} dir={theme.direction}>
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Box className={classes.row}>
          <Typography gutterBottom variant="h5" component="h2">
            Tech+ 101 Q&A Panel - Sept ‘20
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Tech 101 Q&A Panel was an event aimed at incoming first years to
            provide some insights into life at University of Waterloo.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}>
        <Button
          variant="outlined"
          color="primary"
          href="https://medium.com/@techplusuw/tech-101-q-a-panel-8bbcd15fbf8b"
          target="_blank"
          disableElevation
        >
          Learn more
        </Button>
      </Grid>
    </Grid>
  </TabPanel>
  <TabPanel value={value} index={3} dir={theme.direction}>
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Box className={classes.row}>
          <Typography gutterBottom variant="h5" component="h2">
            Resume Critique - Sept ‘20
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Facilitated 264 resume reviews
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/n2cholas/resume-checklist"
          target="_blank"
          disableElevation
        >
          Learn more
        </Button>
      </Grid>
      <Grid item xs={9}>
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            Mock Interview - June ‘20
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}></Grid>
      <Grid item xs={9}>
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            Resume Critique - May ‘20
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </Box>
      </Grid>
      <Grid item xs={3} className={classes.link}></Grid>
    </Grid>
  </TabPanel>
</SwipeableViews>;
