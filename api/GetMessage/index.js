module.exports = async function (context, req) {
  const date = "2025-01-22T19:09:55.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

