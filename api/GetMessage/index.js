module.exports = async function (context, req) {
  const date = "2022-03-27T22:10:20.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

