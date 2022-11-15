module.exports = async function (context, req) {
  const date = "2022-11-15T00:59:39.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

