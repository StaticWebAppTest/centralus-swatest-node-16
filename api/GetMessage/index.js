module.exports = async function (context, req) {
  const date = "2022-11-01T01:17:12.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

