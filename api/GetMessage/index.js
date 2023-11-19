module.exports = async function (context, req) {
  const date = "2023-11-19T11:06:58.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

