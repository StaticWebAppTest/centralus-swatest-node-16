module.exports = async function (context, req) {
  const date = "2023-02-15T16:13:42.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

