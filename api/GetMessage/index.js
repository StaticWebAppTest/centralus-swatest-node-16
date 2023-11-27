module.exports = async function (context, req) {
  const date = "2023-11-27T02:22:40.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

