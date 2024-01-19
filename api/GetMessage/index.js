module.exports = async function (context, req) {
  const date = "2024-01-19T12:17:25.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

