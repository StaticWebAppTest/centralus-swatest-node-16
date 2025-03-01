module.exports = async function (context, req) {
  const date = "2025-03-01T02:52:53.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

