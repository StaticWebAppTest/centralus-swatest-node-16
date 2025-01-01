module.exports = async function (context, req) {
  const date = "2025-01-01T02:51:48.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

