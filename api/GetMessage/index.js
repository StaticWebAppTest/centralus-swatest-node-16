module.exports = async function (context, req) {
  const date = "2024-12-14T12:21:51.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

