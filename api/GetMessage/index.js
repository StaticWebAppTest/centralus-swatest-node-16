module.exports = async function (context, req) {
  const date = "2025-03-31T14:12:49.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

