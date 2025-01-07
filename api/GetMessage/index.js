module.exports = async function (context, req) {
  const date = "2025-01-07T02:16:54.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

