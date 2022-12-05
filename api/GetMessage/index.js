module.exports = async function (context, req) {
  const date = "2022-12-05T03:10:55.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

