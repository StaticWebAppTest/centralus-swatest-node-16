module.exports = async function (context, req) {
  const date = "2022-06-22T22:09:48.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

