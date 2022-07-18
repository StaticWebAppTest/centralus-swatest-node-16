module.exports = async function (context, req) {
  const date = "2022-07-18T00:59:46.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

