module.exports = async function (context, req) {
  const date = "2022-07-13T00:58:37.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

