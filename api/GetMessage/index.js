module.exports = async function (context, req) {
  const date = "2022-07-22T05:20:58.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

