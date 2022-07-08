module.exports = async function (context, req) {
  const date = "2022-07-08T07:09:58.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

