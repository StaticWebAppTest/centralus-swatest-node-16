module.exports = async function (context, req) {
  const date = "2025-01-17T04:14:35.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

