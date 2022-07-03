module.exports = async function (context, req) {
  const date = "2022-07-03T04:21:17.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

