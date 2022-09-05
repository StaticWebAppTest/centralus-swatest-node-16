module.exports = async function (context, req) {
  const date = "2022-09-05T22:11:35.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

