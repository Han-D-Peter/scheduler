export const home = (req, res) => res.render("home");

export const getApplication = (req, res) => res.render("applicationCheck");

export const postApplication = (req, res) => {
  console.log(req.body);
  res.redirect("/");
};
