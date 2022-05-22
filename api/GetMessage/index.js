module.exports = async function (context, req) {
  const date = "2022-05-22T03:36:20.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

