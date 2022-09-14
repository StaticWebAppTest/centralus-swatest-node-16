module.exports = async function (context, req) {
  const date = "2022-09-14T23:12:40.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

