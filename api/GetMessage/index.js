module.exports = async function (context, req) {
  const date = "2025-11-27T12:29:17.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

