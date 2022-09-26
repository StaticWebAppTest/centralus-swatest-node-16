module.exports = async function (context, req) {
  const date = "2022-09-26T17:25:37.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

