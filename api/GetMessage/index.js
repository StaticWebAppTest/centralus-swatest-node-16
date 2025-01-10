module.exports = async function (context, req) {
  const date = "2025-01-10T08:15:29.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

