module.exports = async function (context, req) {
  const date = "2022-03-15T00:46:26.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

