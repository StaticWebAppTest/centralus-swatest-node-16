module.exports = async function (context, req) {
  const date = "2024-01-01T02:31:32.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

