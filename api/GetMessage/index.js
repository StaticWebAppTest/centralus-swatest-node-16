module.exports = async function (context, req) {
  const date = "2024-11-30T12:21:37.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

