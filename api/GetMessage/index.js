module.exports = async function (context, req) {
  const date = "2023-08-20T14:06:42.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

