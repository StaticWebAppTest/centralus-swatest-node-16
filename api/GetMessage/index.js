module.exports = async function (context, req) {
  const date = "2025-04-21T12:24:55.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

