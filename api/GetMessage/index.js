module.exports = async function (context, req) {
  const date = "2022-09-04T23:11:10.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

