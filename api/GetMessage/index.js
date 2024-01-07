module.exports = async function (context, req) {
  const date = "2024-01-07T16:10:41.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

