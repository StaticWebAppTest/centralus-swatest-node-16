module.exports = async function (context, req) {
  const date = "2022-05-29T00:57:20.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

