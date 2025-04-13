module.exports = async function (context, req) {
  const date = "2025-04-13T20:12:47.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

