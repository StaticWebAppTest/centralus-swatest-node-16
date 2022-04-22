module.exports = async function (context, req) {
  const date = "2022-04-22T03:09:41.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

