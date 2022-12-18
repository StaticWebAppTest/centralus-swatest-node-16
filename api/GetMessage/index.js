module.exports = async function (context, req) {
  const date = "2022-12-18T07:07:51.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

