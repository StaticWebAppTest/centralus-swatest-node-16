module.exports = async function (context, req) {
  const date = "2022-11-27T00:57:53.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

