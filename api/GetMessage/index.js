module.exports = async function (context, req) {
  const date = "2025-02-26T03:18:49.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

