module.exports = async function (context, req) {
  const date = "2022-08-01T23:12:56.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

