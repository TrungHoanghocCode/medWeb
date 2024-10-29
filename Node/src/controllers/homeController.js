// let getHomePage = (req, res) => {
//   return res.send("Hello world with trungHocCode from controller!");
// };

let getHomePage = (req, res) => {
  return res.render("homePage.ejs");
};

module.exports = {
  getHomePage: getHomePage,
};
