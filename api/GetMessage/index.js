module.exports = async function (context, req) {
  const date = "2023-01-21T23:08:50.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

