module.exports = async function (context, req) {
  const date = "2024-02-25T00:44:22.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

