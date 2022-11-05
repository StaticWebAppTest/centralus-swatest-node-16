module.exports = async function (context, req) {
  const date = "2022-11-05T15:10:43.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

