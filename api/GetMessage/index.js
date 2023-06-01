module.exports = async function (context, req) {
  const date = "2023-06-01T14:07:58.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

