module.exports = async function (context, req) {
  const date = "2023-08-29T00:39:51.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

