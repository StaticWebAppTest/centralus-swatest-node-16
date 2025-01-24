module.exports = async function (context, req) {
  const date = "2025-01-24T20:12:12.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

