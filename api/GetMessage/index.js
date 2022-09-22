module.exports = async function (context, req) {
  const date = "2022-09-22T22:12:34.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

