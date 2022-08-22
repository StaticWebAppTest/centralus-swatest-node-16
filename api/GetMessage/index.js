module.exports = async function (context, req) {
  const date = "2022-08-22T22:11:27.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

