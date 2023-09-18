module.exports = async function (context, req) {
  const date = "2023-09-18T00:40:38.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

