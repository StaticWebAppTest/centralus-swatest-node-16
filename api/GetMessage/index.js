module.exports = async function (context, req) {
  const date = "2023-05-29T22:08:03.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

