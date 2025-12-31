module.exports = async function (context, req) {
  const date = "2025-12-31T20:15:29.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

