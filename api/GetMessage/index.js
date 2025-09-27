module.exports = async function (context, req) {
  const date = "2025-09-27T02:17:40.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

