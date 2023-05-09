module.exports = async function (context, req) {
  const date = "2023-05-09T23:08:41.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

