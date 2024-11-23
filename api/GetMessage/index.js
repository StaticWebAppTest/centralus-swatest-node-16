module.exports = async function (context, req) {
  const date = "2024-11-23T00:57:46.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

