module.exports = async function (context, req) {
  const date = "2023-08-09T15:10:41.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

