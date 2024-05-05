module.exports = async function (context, req) {
  const date = "2024-05-05T02:22:52.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

