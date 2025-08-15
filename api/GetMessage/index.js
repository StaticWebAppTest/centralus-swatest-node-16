module.exports = async function (context, req) {
  const date = "2025-08-15T03:16:58.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

