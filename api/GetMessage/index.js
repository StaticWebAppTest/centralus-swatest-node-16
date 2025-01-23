module.exports = async function (context, req) {
  const date = "2025-01-23T20:12:38.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

