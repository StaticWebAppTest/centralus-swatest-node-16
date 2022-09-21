module.exports = async function (context, req) {
  const date = "2022-09-21T22:12:17.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

