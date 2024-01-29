module.exports = async function (context, req) {
  const date = "2024-01-29T01:42:09.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

