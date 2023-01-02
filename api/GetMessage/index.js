module.exports = async function (context, req) {
  const date = "2023-01-02T17:08:35.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

