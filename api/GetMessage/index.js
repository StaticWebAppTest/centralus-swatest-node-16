module.exports = async function (context, req) {
  const date = "2022-12-22T07:08:48.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

