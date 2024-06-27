module.exports = async function (context, req) {
  const date = "2024-06-27T23:11:29.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

