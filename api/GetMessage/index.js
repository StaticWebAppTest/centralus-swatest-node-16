module.exports = async function (context, req) {
  const date = "2022-12-26T02:08:41.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

