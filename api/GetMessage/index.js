module.exports = async function (context, req) {
  const date = "2023-02-14T08:13:31.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

