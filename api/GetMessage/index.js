module.exports = async function (context, req) {
  const date = "2022-07-01T01:04:17.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

