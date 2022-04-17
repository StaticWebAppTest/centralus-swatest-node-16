module.exports = async function (context, req) {
  const date = "2022-04-17T13:18:15.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

