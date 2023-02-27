module.exports = async function (context, req) {
  const date = "2023-02-27T12:20:28.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

