module.exports = async function (context, req) {
  const date = "2024-01-07T03:09:41.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

