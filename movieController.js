export const home = (req, res) => res.render("home");

export const application = (req, res) => {
  console.log(req);
  res.redirect("/");
};
