module.exports = async function (context, req) {
  const date = "2025-04-15T21:12:12.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

