module.exports = async function (context, req) {
  const date = "2022-06-18T12:17:23.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

