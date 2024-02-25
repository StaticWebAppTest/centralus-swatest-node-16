module.exports = async function (context, req) {
  const date = "2024-02-25T20:08:28.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

