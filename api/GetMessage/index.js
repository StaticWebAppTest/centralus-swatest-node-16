module.exports = async function (context, req) {
  const date = "2025-05-07T23:12:48.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

