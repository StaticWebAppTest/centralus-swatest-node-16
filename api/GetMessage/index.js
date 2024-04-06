module.exports = async function (context, req) {
  const date = "2024-04-06T23:09:21.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

