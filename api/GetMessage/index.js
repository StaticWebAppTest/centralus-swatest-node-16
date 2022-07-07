module.exports = async function (context, req) {
  const date = "2022-07-07T19:08:13.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

