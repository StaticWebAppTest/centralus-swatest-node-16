module.exports = async function (context, req) {
  const date = "2024-03-15T04:11:42.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

