module.exports = async function (context, req) {
  const date = "2022-08-09T22:10:39.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

