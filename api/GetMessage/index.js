module.exports = async function (context, req) {
  const date = "2022-10-03T22:13:48.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

