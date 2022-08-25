module.exports = async function (context, req) {
  const date = "2022-08-25T14:11:12.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

