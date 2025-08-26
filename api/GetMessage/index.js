module.exports = async function (context, req) {
  const date = "2025-08-26T12:29:15.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

