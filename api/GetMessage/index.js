module.exports = async function (context, req) {
  const date = "2022-05-31T19:09:01.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

