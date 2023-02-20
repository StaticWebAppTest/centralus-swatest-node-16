module.exports = async function (context, req) {
  const date = "2023-02-20T00:55:19.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

