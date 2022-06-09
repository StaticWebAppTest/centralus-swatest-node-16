module.exports = async function (context, req) {
  const date = "2022-06-09T22:10:52.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

