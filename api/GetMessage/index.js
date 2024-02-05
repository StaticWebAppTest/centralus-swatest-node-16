module.exports = async function (context, req) {
  const date = "2024-02-05T00:42:39.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

