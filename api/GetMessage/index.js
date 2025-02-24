module.exports = async function (context, req) {
  const date = "2025-02-24T02:21:14.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

