module.exports = async function (context, req) {
  const date = "2022-09-03T18:13:21.132Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

