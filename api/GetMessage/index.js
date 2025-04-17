module.exports = async function (context, req) {
  const date = "2025-04-17T12:25:22.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

