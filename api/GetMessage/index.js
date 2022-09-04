module.exports = async function (context, req) {
  const date = "2022-09-04T16:14:36.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

