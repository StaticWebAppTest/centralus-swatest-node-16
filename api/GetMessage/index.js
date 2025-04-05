module.exports = async function (context, req) {
  const date = "2025-04-05T06:16:28.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

