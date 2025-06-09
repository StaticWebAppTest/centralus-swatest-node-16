module.exports = async function (context, req) {
  const date = "2025-06-09T09:15:38.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

