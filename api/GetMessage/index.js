module.exports = async function (context, req) {
  const date = "2023-04-18T10:09:32.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

