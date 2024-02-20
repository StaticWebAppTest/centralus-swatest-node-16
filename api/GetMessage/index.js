module.exports = async function (context, req) {
  const date = "2024-02-20T04:12:34.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

