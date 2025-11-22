module.exports = async function (context, req) {
  const date = "2025-11-22T11:09:48.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

