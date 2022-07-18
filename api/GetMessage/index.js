module.exports = async function (context, req) {
  const date = "2022-07-18T20:11:39.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

