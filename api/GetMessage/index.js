module.exports = async function (context, req) {
  const date = "2025-07-26T04:31:04.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

