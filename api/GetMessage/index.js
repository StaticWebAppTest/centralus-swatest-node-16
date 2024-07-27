module.exports = async function (context, req) {
  const date = "2024-07-27T09:10:10.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

