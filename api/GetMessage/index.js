module.exports = async function (context, req) {
  const date = "2022-12-09T00:51:59.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

