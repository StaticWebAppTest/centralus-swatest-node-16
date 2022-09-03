module.exports = async function (context, req) {
  const date = "2022-09-03T17:13:19.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

