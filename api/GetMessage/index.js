module.exports = async function (context, req) {
  const date = "2022-05-03T20:16:11.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

