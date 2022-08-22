module.exports = async function (context, req) {
  const date = "2022-08-22T05:03:50.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

