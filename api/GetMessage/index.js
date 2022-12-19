module.exports = async function (context, req) {
  const date = "2022-12-19T07:08:48.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

