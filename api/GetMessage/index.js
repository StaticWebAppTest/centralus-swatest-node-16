module.exports = async function (context, req) {
  const date = "2024-07-06T12:17:09.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

