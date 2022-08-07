module.exports = async function (context, req) {
  const date = "2022-08-07T05:09:41.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

