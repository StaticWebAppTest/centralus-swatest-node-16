module.exports = async function (context, req) {
  const date = "2025-01-15T06:16:18.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

