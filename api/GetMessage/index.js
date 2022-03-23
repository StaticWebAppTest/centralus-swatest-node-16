module.exports = async function (context, req) {
  const date = "2022-03-23T20:10:47.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

