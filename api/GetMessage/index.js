module.exports = async function (context, req) {
  const date = "2025-02-25T00:58:41.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

