module.exports = async function (context, req) {
  const date = "2023-04-30T13:09:13.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

