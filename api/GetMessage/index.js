module.exports = async function (context, req) {
  const date = "2025-04-12T08:15:04.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

