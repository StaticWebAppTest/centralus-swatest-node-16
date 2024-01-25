module.exports = async function (context, req) {
  const date = "2024-01-25T19:07:33.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

