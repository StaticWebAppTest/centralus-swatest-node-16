module.exports = async function (context, req) {
  const date = "2022-04-22T18:12:55.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

