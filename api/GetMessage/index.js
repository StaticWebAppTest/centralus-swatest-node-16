module.exports = async function (context, req) {
  const date = "2022-03-03T22:10:10.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

