module.exports = async function (context, req) {
  const date = "2023-03-09T21:09:14.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

