module.exports = async function (context, req) {
  const date = "2022-08-29T18:14:05.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

