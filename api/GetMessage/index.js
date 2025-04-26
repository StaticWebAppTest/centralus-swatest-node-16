module.exports = async function (context, req) {
  const date = "2025-04-26T04:14:55.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

