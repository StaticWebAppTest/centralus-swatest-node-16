module.exports = async function (context, req) {
  const date = "2022-03-22T20:10:36.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

