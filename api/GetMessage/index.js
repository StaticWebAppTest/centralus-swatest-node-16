module.exports = async function (context, req) {
  const date = "2023-12-15T08:12:38.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

