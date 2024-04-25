module.exports = async function (context, req) {
  const date = "2024-04-25T21:10:47.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

