module.exports = async function (context, req) {
  const date = "2023-12-30T08:10:51.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

