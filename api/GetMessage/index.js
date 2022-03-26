module.exports = async function (context, req) {
  const date = "2022-03-26T16:12:49.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

