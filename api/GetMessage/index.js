module.exports = async function (context, req) {
  const date = "2022-06-21T05:16:01.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

