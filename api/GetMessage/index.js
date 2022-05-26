module.exports = async function (context, req) {
  const date = "2022-05-26T16:16:27.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

