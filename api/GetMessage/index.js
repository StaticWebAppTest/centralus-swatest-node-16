module.exports = async function (context, req) {
  const date = "2022-05-27T16:15:51.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

