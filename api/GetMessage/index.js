module.exports = async function (context, req) {
  const date = "2023-11-07T19:07:08.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

