module.exports = async function (context, req) {
  const date = "2022-05-06T00:48:29.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

