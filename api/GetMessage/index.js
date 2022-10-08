module.exports = async function (context, req) {
  const date = "2022-10-08T19:11:51.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

