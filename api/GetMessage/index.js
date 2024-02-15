module.exports = async function (context, req) {
  const date = "2024-02-15T04:11:49.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

