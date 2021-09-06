const location22 = () => {
  const confm = confirm("Do you want show the location in your website");
  if (confm === true) {
    console.log(location.href);
  } else {
    console.log("ok you are click  Cencel button ");
  }
};
location22();
