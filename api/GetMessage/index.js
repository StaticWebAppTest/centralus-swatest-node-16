module.exports = async function (context, req) {
  const date = "2025-01-22T23:10:59.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

