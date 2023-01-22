module.exports = async function (context, req) {
  const date = "2023-01-22T13:12:51.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

