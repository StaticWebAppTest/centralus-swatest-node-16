module.exports = async function (context, req) {
  const date = "2025-04-12T06:16:21.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

