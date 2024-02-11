module.exports = async function (context, req) {
  const date = "2024-02-11T00:44:44.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

