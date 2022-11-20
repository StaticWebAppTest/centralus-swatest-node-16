module.exports = async function (context, req) {
  const date = "2022-11-20T22:09:44.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

