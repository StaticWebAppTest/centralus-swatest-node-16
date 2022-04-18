module.exports = async function (context, req) {
  const date = "2022-04-18T22:11:39.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

