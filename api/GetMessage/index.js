module.exports = async function (context, req) {
  const date = "2022-04-14T04:12:41.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

