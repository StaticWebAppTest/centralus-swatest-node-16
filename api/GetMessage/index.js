module.exports = async function (context, req) {
  const date = "2025-01-05T21:10:04.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

