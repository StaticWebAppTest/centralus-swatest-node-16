module.exports = async function (context, req) {
  const date = "2025-08-15T12:27:34.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

