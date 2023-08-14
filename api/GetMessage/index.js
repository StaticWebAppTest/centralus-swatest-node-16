module.exports = async function (context, req) {
  const date = "2023-08-14T00:39:32.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

