module.exports = async function (context, req) {
  const date = "2025-01-12T02:52:29.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

