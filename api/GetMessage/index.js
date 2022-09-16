module.exports = async function (context, req) {
  const date = "2022-09-16T07:22:55.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

