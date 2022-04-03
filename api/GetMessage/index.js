module.exports = async function (context, req) {
  const date = "2022-04-03T04:12:48.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

