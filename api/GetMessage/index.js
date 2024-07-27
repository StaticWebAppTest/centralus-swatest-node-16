module.exports = async function (context, req) {
  const date = "2024-07-27T03:13:01.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

