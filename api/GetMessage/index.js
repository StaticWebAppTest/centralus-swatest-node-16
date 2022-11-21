module.exports = async function (context, req) {
  const date = "2022-11-21T22:10:13.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

