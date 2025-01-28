module.exports = async function (context, req) {
  const date = "2025-01-28T06:16:18.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

