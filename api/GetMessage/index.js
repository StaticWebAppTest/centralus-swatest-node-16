module.exports = async function (context, req) {
  const date = "2022-06-24T21:08:56.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

