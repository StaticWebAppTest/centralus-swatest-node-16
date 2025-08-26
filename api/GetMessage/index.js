module.exports = async function (context, req) {
  const date = "2025-08-26T22:12:12.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

