module.exports = async function (context, req) {
  const date = "2022-07-31T11:09:14.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

