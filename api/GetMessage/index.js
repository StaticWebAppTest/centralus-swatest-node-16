module.exports = async function (context, req) {
  const date = "2025-04-02T13:23:19.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

