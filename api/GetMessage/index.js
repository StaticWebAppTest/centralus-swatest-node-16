module.exports = async function (context, req) {
  const date = "2022-12-13T13:18:39.530Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

