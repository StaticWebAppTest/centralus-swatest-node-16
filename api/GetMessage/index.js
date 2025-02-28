module.exports = async function (context, req) {
  const date = "2025-02-28T12:22:58.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

