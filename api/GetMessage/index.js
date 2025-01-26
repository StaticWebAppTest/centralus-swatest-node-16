module.exports = async function (context, req) {
  const date = "2025-01-26T23:10:01.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

