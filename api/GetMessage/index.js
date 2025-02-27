module.exports = async function (context, req) {
  const date = "2025-02-27T00:58:27.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

