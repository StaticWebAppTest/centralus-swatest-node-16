module.exports = async function (context, req) {
  const date = "2025-03-27T06:17:49.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

