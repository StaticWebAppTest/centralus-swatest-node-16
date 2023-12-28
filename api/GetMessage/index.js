module.exports = async function (context, req) {
  const date = "2023-12-28T07:08:38.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

