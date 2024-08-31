module.exports = async function (context, req) {
  const date = "2024-08-31T17:08:38.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

