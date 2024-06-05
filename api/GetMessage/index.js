module.exports = async function (context, req) {
  const date = "2024-06-05T01:54:39.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

