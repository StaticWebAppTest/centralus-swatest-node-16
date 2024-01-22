module.exports = async function (context, req) {
  const date = "2024-01-22T04:12:20.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

