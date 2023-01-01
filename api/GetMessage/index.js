module.exports = async function (context, req) {
  const date = "2023-01-01T09:08:52.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

