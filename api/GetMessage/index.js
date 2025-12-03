module.exports = async function (context, req) {
  const date = "2025-12-03T20:16:38.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

