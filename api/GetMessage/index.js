module.exports = async function (context, req) {
  const date = "2022-11-03T23:12:48.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

