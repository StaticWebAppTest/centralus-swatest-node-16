module.exports = async function (context, req) {
  const date = "2023-08-13T13:08:35.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

