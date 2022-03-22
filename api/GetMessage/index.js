module.exports = async function (context, req) {
  const date = "2022-03-22T17:16:54.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

