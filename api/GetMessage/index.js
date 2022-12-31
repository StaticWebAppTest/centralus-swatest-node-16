module.exports = async function (context, req) {
  const date = "2022-12-31T00:47:11.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

