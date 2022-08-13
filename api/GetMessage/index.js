module.exports = async function (context, req) {
  const date = "2022-08-13T15:10:49.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

