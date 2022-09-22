module.exports = async function (context, req) {
  const date = "2022-09-22T21:11:34.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

