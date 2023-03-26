module.exports = async function (context, req) {
  const date = "2023-03-26T17:07:23.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

