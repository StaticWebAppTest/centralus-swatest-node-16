module.exports = async function (context, req) {
  const date = "2022-11-06T22:10:51.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

