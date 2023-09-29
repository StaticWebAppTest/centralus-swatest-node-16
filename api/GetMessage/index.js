module.exports = async function (context, req) {
  const date = "2023-09-29T16:10:42.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

