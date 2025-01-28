module.exports = async function (context, req) {
  const date = "2025-01-28T00:55:52.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

