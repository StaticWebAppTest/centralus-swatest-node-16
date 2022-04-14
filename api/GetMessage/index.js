module.exports = async function (context, req) {
  const date = "2022-04-14T00:57:17.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

