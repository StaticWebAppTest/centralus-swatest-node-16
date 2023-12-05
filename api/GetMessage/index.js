module.exports = async function (context, req) {
  const date = "2023-12-05T12:17:15.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

