module.exports = async function (context, req) {
  const date = "2022-06-16T22:14:18.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

