module.exports = async function (context, req) {
  const date = "2024-09-07T05:10:34.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

