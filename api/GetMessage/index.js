module.exports = async function (context, req) {
  const date = "2024-12-12T14:12:20.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

