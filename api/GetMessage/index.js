module.exports = async function (context, req) {
  const date = "2022-09-06T14:14:39.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

