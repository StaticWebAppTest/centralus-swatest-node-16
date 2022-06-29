module.exports = async function (context, req) {
  const date = "2022-06-29T00:57:59.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

