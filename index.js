//import the needed npm packages 
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
   //generate the image of the link entered by the user with the extension "png"
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
   //write the link entered by the user into the file named "URL.txt"
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  //errors handling
  .catch((error) => {
    if (error.isTtyError) {
      console.log("something went wrong !");
    } else {
      
    }
  });

