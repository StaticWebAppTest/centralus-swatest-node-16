module.exports = async function (context, req) {
  const date = "2022-03-14T19:08:12.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

