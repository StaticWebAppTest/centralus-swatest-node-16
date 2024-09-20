module.exports = async function (context, req) {
  const date = "2024-09-20T13:18:30.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

