module.exports = async function (context, req) {
  const date = "2025-01-12T14:09:31.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

