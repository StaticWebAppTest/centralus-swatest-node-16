module.exports = async function (context, req) {
  const date = "2023-11-04T10:08:43.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

