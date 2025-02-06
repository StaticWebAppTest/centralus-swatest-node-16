module.exports = async function (context, req) {
  const date = "2025-02-06T03:15:16.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

