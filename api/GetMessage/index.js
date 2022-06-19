module.exports = async function (context, req) {
  const date = "2022-06-19T00:56:32.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

