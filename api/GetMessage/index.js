module.exports = async function (context, req) {
  const date = "2023-01-21T14:07:37.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

