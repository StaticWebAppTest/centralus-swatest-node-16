module.exports = async function (context, req) {
  const date = "2022-07-13T04:29:21.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

