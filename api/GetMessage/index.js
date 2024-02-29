module.exports = async function (context, req) {
  const date = "2024-02-29T00:40:48.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

