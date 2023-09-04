module.exports = async function (context, req) {
  const date = "2023-09-04T03:09:06.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

