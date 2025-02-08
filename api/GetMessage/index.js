module.exports = async function (context, req) {
  const date = "2025-02-08T23:11:41.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

