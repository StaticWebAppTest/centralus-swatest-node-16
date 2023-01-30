module.exports = async function (context, req) {
  const date = "2023-01-30T22:09:13.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

