module.exports = async function (context, req) {
  const date = "2022-04-16T22:09:34.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

