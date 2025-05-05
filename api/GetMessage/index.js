module.exports = async function (context, req) {
  const date = "2025-05-05T20:14:31.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

