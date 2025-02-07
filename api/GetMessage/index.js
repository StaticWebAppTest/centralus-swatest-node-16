module.exports = async function (context, req) {
  const date = "2025-02-07T00:57:16.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

