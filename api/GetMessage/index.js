module.exports = async function (context, req) {
  const date = "2022-08-22T23:10:57.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

