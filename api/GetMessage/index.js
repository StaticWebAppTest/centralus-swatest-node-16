module.exports = async function (context, req) {
  const date = "2022-09-15T08:16:54.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

