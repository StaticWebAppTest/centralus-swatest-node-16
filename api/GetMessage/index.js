module.exports = async function (context, req) {
  const date = "2022-11-23T08:13:35.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

