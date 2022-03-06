module.exports = async function (context, req) {
  const date = "2022-03-06T21:08:44.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

