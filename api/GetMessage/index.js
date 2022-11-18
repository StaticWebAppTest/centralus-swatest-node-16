module.exports = async function (context, req) {
  const date = "2022-11-18T22:10:39.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

