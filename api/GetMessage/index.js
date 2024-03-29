module.exports = async function (context, req) {
  const date = "2024-03-29T07:09:31.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

