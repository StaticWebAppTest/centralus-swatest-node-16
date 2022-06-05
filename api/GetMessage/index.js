module.exports = async function (context, req) {
  const date = "2022-06-05T20:10:17.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

