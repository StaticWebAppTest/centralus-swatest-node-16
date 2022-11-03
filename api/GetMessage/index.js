module.exports = async function (context, req) {
  const date = "2022-11-03T22:10:24.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

