module.exports = async function (context, req) {
  const date = "2022-10-22T22:12:36.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

