module.exports = async function (context, req) {
  const date = "2024-07-31T09:12:09.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

