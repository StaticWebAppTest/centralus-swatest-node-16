module.exports = async function (context, req) {
  const date = "2026-06-07T21:03:25.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

