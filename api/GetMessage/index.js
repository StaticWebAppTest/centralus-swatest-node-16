module.exports = async function (context, req) {
  const date = "2024-01-16T12:17:44.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

