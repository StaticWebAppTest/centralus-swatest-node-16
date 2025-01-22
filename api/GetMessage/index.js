module.exports = async function (context, req) {
  const date = "2025-01-22T12:22:23.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

