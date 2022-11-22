module.exports = async function (context, req) {
  const date = "2022-11-22T20:10:43.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

