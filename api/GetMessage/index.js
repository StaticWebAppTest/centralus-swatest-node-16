module.exports = async function (context, req) {
  const date = "2023-04-03T05:08:38.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

