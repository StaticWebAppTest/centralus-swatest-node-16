module.exports = async function (context, req) {
  const date = "2025-01-17T20:12:11.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

