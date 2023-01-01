module.exports = async function (context, req) {
  const date = "2023-01-01T22:08:20.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

