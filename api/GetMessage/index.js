module.exports = async function (context, req) {
  const date = "2022-08-11T22:10:24.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

