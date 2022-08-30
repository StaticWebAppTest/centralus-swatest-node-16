module.exports = async function (context, req) {
  const date = "2022-08-30T11:09:50.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

