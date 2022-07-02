module.exports = async function (context, req) {
  const date = "2022-07-02T04:29:28.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

