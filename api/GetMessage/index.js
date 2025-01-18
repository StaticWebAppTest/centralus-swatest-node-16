module.exports = async function (context, req) {
  const date = "2025-01-18T10:10:46.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

