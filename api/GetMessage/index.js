module.exports = async function (context, req) {
  const date = "2022-04-05T10:10:49.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

