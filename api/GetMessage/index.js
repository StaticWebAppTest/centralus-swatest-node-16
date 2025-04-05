module.exports = async function (context, req) {
  const date = "2025-04-05T20:12:33.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

