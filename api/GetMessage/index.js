module.exports = async function (context, req) {
  const date = "2025-04-26T08:15:13.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

