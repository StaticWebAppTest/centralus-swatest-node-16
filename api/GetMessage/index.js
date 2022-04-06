module.exports = async function (context, req) {
  const date = "2022-04-06T23:10:49.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

