module.exports = async function (context, req) {
  const date = "2023-11-20T00:44:03.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

