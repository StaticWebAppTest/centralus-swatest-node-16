module.exports = async function (context, req) {
  const date = "2022-12-12T21:09:12.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

