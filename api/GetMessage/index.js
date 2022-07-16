module.exports = async function (context, req) {
  const date = "2022-07-16T22:10:34.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

