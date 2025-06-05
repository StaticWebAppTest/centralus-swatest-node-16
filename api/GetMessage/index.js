module.exports = async function (context, req) {
  const date = "2025-06-05T20:12:23.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

