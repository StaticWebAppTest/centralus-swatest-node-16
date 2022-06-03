module.exports = async function (context, req) {
  const date = "2022-06-03T22:10:05.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

