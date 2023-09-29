module.exports = async function (context, req) {
  const date = "2023-09-29T00:40:48.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

