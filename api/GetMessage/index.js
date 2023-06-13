module.exports = async function (context, req) {
  const date = "2023-06-13T00:55:03.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

