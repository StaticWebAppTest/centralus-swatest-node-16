module.exports = async function (context, req) {
  const date = "2023-12-05T20:09:56.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

