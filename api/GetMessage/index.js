module.exports = async function (context, req) {
  const date = "2025-01-07T20:12:41.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

