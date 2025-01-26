module.exports = async function (context, req) {
  const date = "2025-01-26T14:09:13.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

