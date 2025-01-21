module.exports = async function (context, req) {
  const date = "2025-01-21T10:12:14.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

