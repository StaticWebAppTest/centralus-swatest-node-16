module.exports = async function (context, req) {
  const date = "2022-08-16T15:12:15.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

