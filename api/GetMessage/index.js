module.exports = async function (context, req) {
  const date = "2022-12-27T22:08:37.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

