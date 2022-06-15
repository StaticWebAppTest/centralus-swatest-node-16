module.exports = async function (context, req) {
  const date = "2022-06-15T22:10:11.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

