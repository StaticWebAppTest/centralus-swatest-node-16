module.exports = async function (context, req) {
  const date = "2025-06-03T15:15:30.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

