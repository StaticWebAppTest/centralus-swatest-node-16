module.exports = async function (context, req) {
  const date = "2025-07-24T20:14:35.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

