module.exports = async function (context, req) {
  const date = "2022-04-18T20:11:44.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

