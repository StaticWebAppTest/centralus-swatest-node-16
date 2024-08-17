module.exports = async function (context, req) {
  const date = "2024-08-17T12:17:29.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

