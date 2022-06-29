module.exports = async function (context, req) {
  const date = "2022-06-29T18:16:51.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

