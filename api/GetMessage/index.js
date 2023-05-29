module.exports = async function (context, req) {
  const date = "2023-05-29T16:11:12.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

