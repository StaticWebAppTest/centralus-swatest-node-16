module.exports = async function (context, req) {
  const date = "2024-11-04T20:12:29.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

