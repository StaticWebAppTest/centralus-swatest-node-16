module.exports = async function (context, req) {
  const date = "2022-05-03T12:27:32.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

