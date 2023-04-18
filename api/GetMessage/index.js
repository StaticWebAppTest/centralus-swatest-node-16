module.exports = async function (context, req) {
  const date = "2023-04-18T15:10:42.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

