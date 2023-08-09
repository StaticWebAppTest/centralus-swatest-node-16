module.exports = async function (context, req) {
  const date = "2023-08-09T19:07:41.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

