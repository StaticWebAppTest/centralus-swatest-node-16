module.exports = async function (context, req) {
  const date = "2022-08-18T14:12:43.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

