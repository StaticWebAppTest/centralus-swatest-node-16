module.exports = async function (context, req) {
  const date = "2025-06-02T11:12:18.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

