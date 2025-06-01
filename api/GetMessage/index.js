module.exports = async function (context, req) {
  const date = "2025-06-01T13:21:49.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

