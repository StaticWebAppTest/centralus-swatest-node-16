module.exports = async function (context, req) {
  const date = "2022-10-04T01:17:49.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

