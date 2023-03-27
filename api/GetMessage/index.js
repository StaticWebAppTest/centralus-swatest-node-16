module.exports = async function (context, req) {
  const date = "2023-03-27T07:09:20.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

